import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const getTodoFeatureState = createFeatureSelector<TodoState>('todo');

export const loading = createSelector(
  getTodoFeatureState,
  (state) => state.loading
);

export const items = createSelector(
  getTodoFeatureState,
  (state) => state.items
);
