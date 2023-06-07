import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoDataService } from '../../services/todo-data.service';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css'],
})
export class TodoEntryComponent {
  items: Todo[] = [];

  constructor(private readonly todoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.todoDataService.getItems().subscribe((items) => {
      this.setSortedItems(items);
    });
  }

  addTodo(value: string): void {
    this.todoDataService.addTodo(value).subscribe((addedItem) => {
      const mergedItems = [...this.items, addedItem];
      this.setSortedItems(mergedItems);
    });
  }

  deleteTodo(item: Todo): void {
    this.todoDataService.deleteTodo(item).subscribe(() => {
      const filteredItems = this.items.filter((x) => x.id !== item.id);
      this.setSortedItems(filteredItems);
    });
  }

  markAsDone(item: Todo): void {
    this.todoDataService.markAsDone(item).subscribe((updatedItem) => {
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
