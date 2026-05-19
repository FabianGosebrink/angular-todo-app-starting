import { Component, input, output } from '@angular/core';
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  items = input.required<Todo[]>()
  markedAsDone = output<Todo>();
  todoDeleted = output<Todo>();
}
