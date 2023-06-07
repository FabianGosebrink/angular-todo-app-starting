import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'Add Todo': props<{ value: string }>(),
    'Add Todo Finished': props<{ todo: Todo }>(),

    'Get All Todos': emptyProps(),
    'Get All Todos Finished': props<{ todos: Todo[] }>(),
  },
});
