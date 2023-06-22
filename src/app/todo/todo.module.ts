import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoMainComponent } from './container/todo-main/todo-main.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: TodoMainComponent,
            },
        ]),
        TodoFormComponent, TodoListComponent, TodoMainComponent,
    ],
})
export class TodoModule {}
