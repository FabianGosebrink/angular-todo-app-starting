import { computed, inject } from "@angular/core";
import { Todo } from "../models/todo";
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { tapResponse } from '@ngrx/operators'
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { exhaustMap } from "rxjs";
import { TodosService } from "../services/todos.service";

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
    ),
    addTodo: rxMethod<string>(
      exhaustMap((value) => {
        patchState(store, { loading: true });

        return todoService.addTodo(value).pipe(
          tapResponse({
            next: (item) =>
              patchState(store, { items: [...store.items(), item] }),
            error: console.error,
            finalize: () => patchState(store, { loading: false }),
          }),
        );
      }),
    ),
    moveToDone: rxMethod<Todo>(
      exhaustMap((todo) => {
        patchState(store, { loading: true });

        const toSend = { ...todo, done: !todo.done };

        return todoService.markAsDone(toSend).pipe(
          tapResponse({
            next: (updatedTodo) => {
              const allItems = [...store.items()];
              const index = allItems.findIndex((x) => x.id === todo.id);

              allItems[index] = updatedTodo;

              patchState(store, {
                items: allItems,
              });
            },
            error: console.error,
            finalize: () => patchState(store, { loading: false }),
          }),
        );
      }),
    ),
    deleteTodo: rxMethod<Todo>(
      exhaustMap((todo) => {
        patchState(store, { loading: true });

        return todoService.deleteTodo(todo).pipe(
          tapResponse({
            next: () => {
              patchState(store, {
                items: [...store.items().filter((x) => x.id !== todo.id)],
              });
            },
            error: console.error,
            finalize: () => patchState(store, { loading: false }),
          }),
        );
      }),
    ),
  })),
  withHooks({
    onInit({ loadAllTodos }) {
      loadAllTodos();
    },
  })
);

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

