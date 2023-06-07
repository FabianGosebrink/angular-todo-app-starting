import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEntryComponent } from './container/todo-entry/todo-entry.component';
import { TodoEffects } from './store/todo.effects';
import { todoReducer } from './store/todo.reducer';

export const TODO_ROUTES: Routes = [
  {
    path: '',
    component: TodoEntryComponent,
    providers: [
      importProvidersFrom(
        StoreModule.forFeature('todo', todoReducer),
        EffectsModule.forFeature([TodoEffects])
      ),
    ],
  },
];
