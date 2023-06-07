import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoActions } from '../../store/todo.actions';
import { items, loading } from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css'],
})
export class TodoEntryComponent {
  items$: Observable<Todo[]>;

  loading$: Observable<boolean>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(items);
    this.loading$ = this.store.select(loading);

    this.store.dispatch(TodoActions.getAllTodos());
  }

  addTodo(value: string): void {
    this.store.dispatch(TodoActions.addTodo({ value }));
  }

  // deleteTodo(item: Todo): void {
  //   this.todoDataService.deleteTodo(item).subscribe(() => {
  //     const filteredItems = this.items.filter((x) => x.id !== item.id);
  //     this.setSortedItems(filteredItems);
  //   });
  // }

  // markAsDone(item: Todo): void {
  //   this.todoDataService.markAsDone(item).subscribe((updatedItem) => {
  //     const filteredItems = this.items.filter((x) => x.id !== updatedItem.id);
  //     const mergedItems = [...filteredItems, updatedItem];
  //     this.setSortedItems(mergedItems);
  //   });
  // }

  // private setSortedItems(items: Todo[]): void {
  //   const sortedItems = items.sort(this.sortByDone());
  //   this.items = [...sortedItems];
  // }

  // private sortByDone(): (a: Todo, b: Todo) => number {
  //   return (a: Todo, b: Todo) => {
  //     if (a.done < b.done) {
  //       return -1;
  //     }
  //     if (a.done > b.done) {
  //       return 1;
  //     }
  //     return 0;
  //   };
  // }
}
