import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

const APP_ROUTES: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./app/todo').then((m) => m.TODO_ROUTES),
  },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
