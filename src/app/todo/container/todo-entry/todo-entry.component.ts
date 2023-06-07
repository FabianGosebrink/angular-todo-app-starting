import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoActions } from '../../store/todo.actions';
import { items, loading } from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css'],
})
export class TodoEntryComponent {
  items$: Observable<Todo[]>;
  loading$: Observable<boolean>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(items);
    this.loading$ = this.store.select(loading);

    this.store.dispatch(TodoActions.getAllTodos());
  }

  addTodo(value: string): void {
    this.store.dispatch(TodoActions.addTodo({ value }));
  }

  deleteTodo(todo: Todo): void {
    this.store.dispatch(TodoActions.deleteTodo({ todo }));
  }

  markAsDone(todo: Todo): void {
    this.store.dispatch(TodoActions.setAsDone({ todo }));
  }
}
