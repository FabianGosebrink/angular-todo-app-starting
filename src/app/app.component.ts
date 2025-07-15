import { Component } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'app';
  items: Todo[] = [];
  form: FormGroup;

  constructor(
    private readonly http: HttpClient
  ) {

  }

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
