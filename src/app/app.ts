import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoMainComponent } from './todo/container/todo-main/todo-main.component';

@Component({
  selector: 'app-root',
  imports: [TodoMainComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-todo-app-starting-2');
}
