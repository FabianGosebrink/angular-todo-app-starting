import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo',
    loadComponent: () => import('./todo/container/todo-main/todo-main.component').then(m => m.TodoMainComponent),
  },
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full',
  },
];
