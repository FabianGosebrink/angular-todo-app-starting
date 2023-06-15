import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css'],
})
export class TodoMainComponent {
  title = 'app';
  items: Todo[] = [];

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getItems().subscribe((items) => {
      this.setSortedItems(items);
    });
  }

  addTodo(toSend: string): void {
    this.todoService.addItem(toSend).subscribe((addedItem) => {
      const mergedItems = [...this.items, addedItem];
      this.setSortedItems(mergedItems);
    });
  }

  deleteTodo(item: Todo): void {
    this.todoService.deleteItem(item).subscribe(() => {
      const filteredItems = this.items.filter((x) => x.id !== item.id);
      this.setSortedItems(filteredItems);
    });
  }

  markAsDone(item: Todo): void {
    item.done = !item.done;
    this.todoService.updateItem(item).subscribe((updatedItem) => {
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
