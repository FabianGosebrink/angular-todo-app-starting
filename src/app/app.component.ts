import { Component } from '@angular/core';
import { TodoMainComponent } from "./todo/container/todo-main/todo-main.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TodoMainComponent]
})
export class AppComponent {
  title = 'app';

}
