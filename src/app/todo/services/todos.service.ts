import { Todo } from "../models/todo";
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from "@angular/core";
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { tapResponse } from '@ngrx/operators'
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { exhaustMap } from "rxjs";

type TodoState = {
  items: Todo[];
  loading: boolean;
}

const initialState: TodoState = {
  items: [],
  loading: false,
};

export const TodoStore = signalStore(
  withState(initialState),
  withComputed(({ items }) => ({
    sortedItems: computed(() => items().sort(sortByDone())),
  })),
  withMethods((store,
               todoService = inject(TodosService)) => ({
    loadAllTodos: rxMethod<void>(
      exhaustMap(() => {
        patchState(store, { loading: true });

        return todoService.getItems().pipe(
          tapResponse({
            next: (items) => patchState(store, { items }),
            error: console.error,
            finalize: () => patchState(store, { loading: false }),
          })
        )
      })
    )
  })),
  withHooks({
    onInit({ loadAllTodos }) {
      loadAllTodos();
    },
  })
);


@Injectable({ providedIn: 'root' })
export class TodosService {
  #url = `${environment.apiUrl}todos`;
  private readonly http = inject(HttpClient);

  getItems() {
    return this.http.get<Todo[]>(this.#url);
  }

  addTodo(todoToAdd: string): void {
    this.http.post<Todo>(this.#url, { value: todoToAdd });
  }

  deleteTodo(item: Todo): void {
    this.http.delete(`${this.#url}/${item.id}`)
  }

  markAsDone(item: Todo): void {
    this.http.put<Todo>(`${this.#url}/${item.id}`, item)
  }
}

function sortByDone(): (a: Todo, b: Todo) => number {
  return (a: Todo, b: Todo) => {
    if (a.done < b.done) {
      return -1;
    }
    if (a.done > b.done) {
      return 1;
    }
    return 0;
  };
}
