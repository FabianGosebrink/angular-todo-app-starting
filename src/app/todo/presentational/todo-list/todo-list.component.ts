import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input({ required: true }) items: Todo[] = [];

  @Output() todoDeleted = new EventEmitter<Todo>();

  @Output() todoMarkedAsDone = new EventEmitter<Todo>();

  deleteTodo(item: Todo): void {
    if (confirm('really delete')) {
      this.todoDeleted.emit(item);
    }
  }

  markAsDone(item: Todo): void {
    this.todoMarkedAsDone.emit(item);
  }
}
