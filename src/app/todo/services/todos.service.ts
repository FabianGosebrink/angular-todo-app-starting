import { Todo } from "../models/todo";
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from "@angular/core";

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

