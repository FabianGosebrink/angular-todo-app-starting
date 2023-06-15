import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo/presentational/todo-form/todo-form.component';
import { TodoListComponent } from './todo/presentational/todo-list/todo-list.component';
import { TodoMainComponent } from './todo/container/todo-main/todo-main.component';

@NgModule({
  declarations: [AppComponent, TodoFormComponent, TodoListComponent, TodoMainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
