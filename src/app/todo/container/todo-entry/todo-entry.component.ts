import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoFormComponent } from '../../presentational/todo-form/todo-form.component';
import { TodoListComponent } from '../../presentational/todo-list/todo-list.component';
import { TodoActions } from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css'],
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent, AsyncPipe],
})
export class TodoEntryComponent {
  items$: Observable<Todo[]>;
  loading$: Observable<boolean>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(TodoSelectors.items);
    this.loading$ = this.store.select(TodoSelectors.loading);

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
