import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEntryComponent } from './container/todo-entry/todo-entry.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';
import { TodoEffects } from './store/todo.effects';
import { todoReducer } from './store/todo.reducer';

@NgModule({
  declarations: [TodoEntryComponent, TodoListComponent, TodoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoEntryComponent,
      },
    ]),
    StoreModule.forFeature('todo', todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoModule {}
