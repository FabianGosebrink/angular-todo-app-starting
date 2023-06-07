import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Todo } from '../models/todo';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class TodoDataService {
  constructor(private readonly http: HttpService) {}

  getItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}todos/`);
  }

  addTodo(value: string): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiUrl}todos/`, { value });
  }

  deleteTodo(item: Todo): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}todos/${item.id}`);
  }

  markAsDone(item: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${environment.apiUrl}todos/${item.id}`, item);
  }
}
