import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import { TodoActions } from './todo.actions';

export interface TodoState {
  items: Todo[];
  loading: boolean;
}

export const initialState: TodoState = {
  items: [],
  loading: false,
};

export const todoReducer = createReducer(
  initialState,

  on(TodoActions.addTodo, TodoActions.getAllTodos, (state) => {
    return { ...state, loading: true };
  }),

  on(TodoActions.addTodoFinished, (state, { todo }) => {
    return { ...state, loading: false, items: [...state.items, todo] };
  }),

  on(TodoActions.getAllTodosFinished, (state, { todos }) => {
    return { ...state, loading: false, items: [...state.items, ...todos] };
  })
);
