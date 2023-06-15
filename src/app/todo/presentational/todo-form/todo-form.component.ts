import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoAdded = new EventEmitter<string>();

  form = new FormGroup({
    todoValue: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
  });

  ngOnInit() {}

  addTodo(): void {
    const value = this.form.value.todoValue;

    this.todoAdded.emit(value);
  }
}
