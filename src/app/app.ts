import { Component, inject, signal } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './app.scss'
})
export class App {
  items: Todo[] = [];
  form: FormGroup;
  protected readonly title = signal('angular-todo-app-starting-2');
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Todo[]>(`${environment.apiUrl}todos/`).subscribe((items) => {
      this.setSortedItems(items);
    });

    this.form = new FormGroup({
      todoValue: new FormControl('', Validators.required),
    });
  }

  addTodo(): void {
    const toSend = { value: this.form.value.todoValue };

    this.http
      .post<Todo>(`${environment.apiUrl}todos/`, toSend)
      .subscribe((addedItem) => {
        const mergedItems = [...this.items, addedItem];
        this.setSortedItems(mergedItems);
      });

    this.form.reset();
  }

  deleteTodo(item: Todo): void {
    this.http
      .delete(`${environment.apiUrl}todos/${item.id}`)
      .subscribe(() => {
        const filteredItems = this.items.filter((x) => x.id !== item.id);
        this.setSortedItems(filteredItems);
      });
  }

  markAsDone(item: Todo): void {
    item.done = !item.done;
    this.http
      .put<Todo>(`${environment.apiUrl}todos/${item.id}`, item)
      .subscribe((updatedItem) => {
        const filteredItems = this.items.filter((x) => x.id !== updatedItem.id);
        const mergedItems = [...filteredItems, updatedItem];
        this.setSortedItems(mergedItems);
      });
  }

  private setSortedItems(items: Todo[]): void {
    const sortedItems = items.sort(this.sortByDone());
    this.items = [...sortedItems];
  }

  private sortByDone(): (a: Todo, b: Todo) => number {
    return (a: Todo, b: Todo) => {
      if (a.done < b.done) {
        return -1;
      }
      if (a.done > b.done) {
        return 1;
      }
      return 0;
    };
  }
}
