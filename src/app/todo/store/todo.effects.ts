import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { TodoDataService } from './../services/todo-data.service';
import { TodoActions } from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoDataService: TodoDataService
  ) {}

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      concatMap(({ value }) => {
        return this.todoDataService
          .addTodo(value)
          .pipe(map((todo) => TodoActions.addTodoFinished({ todo })));
      })
    )
  );

  getAllTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getAllTodos),
      concatMap(() => {
        return this.todoDataService
          .getItems()
          .pipe(map((todos) => TodoActions.getAllTodosFinished({ todos })));
      })
    )
  );
}