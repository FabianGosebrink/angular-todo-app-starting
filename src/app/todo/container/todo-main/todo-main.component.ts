import { Component, inject } from '@angular/core';
import { TodoFormComponent } from "../../presentational/todo-form/todo-form.component";
import { TodoListComponent } from "../../presentational/todo-list/todo-list.component";
import { TodoStore } from "../../state/todo.store";

@Component({
  selector: 'app-todo-main',
  imports: [
    TodoFormComponent,
    TodoListComponent
  ],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.css',
  providers: [TodoStore],
})
export class TodoMainComponent {
  readonly store = inject(TodoStore);
}
