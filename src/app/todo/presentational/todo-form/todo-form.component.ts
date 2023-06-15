import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() todoAdded = new EventEmitter<string>();

  form = new FormGroup({
    todoValue: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
  });

  addTodo(): void {
    const value = this.form.value.todoValue;

    this.todoAdded.emit(value);
  }

  add(a: number, b: number): number {
    return a + b;
  }
}
