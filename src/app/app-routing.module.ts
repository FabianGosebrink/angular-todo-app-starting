import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoMainComponent } from './todo/container/todo-main/todo-main.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoMainComponent,
  },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
