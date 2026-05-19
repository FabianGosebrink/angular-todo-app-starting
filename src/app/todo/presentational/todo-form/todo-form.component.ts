import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  todoAdded = output<string>();

  form = new FormGroup({
    todoValue: new FormControl('', Validators.required),
  });

  addTodo(): void {
    this.todoAdded.emit(this.form.value.todoValue);

    this.form.reset();
  }
}
