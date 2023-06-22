import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  waitForAsync,
} from '@angular/core/testing';
import { of } from 'rxjs';
import { autoMock } from '../../../testing/auto-mock';
import { TodoService } from '../../services/todo.service';
import { TodoMainComponent } from './todo-main.component';

describe('TodoMainComponent', () => {
  let component: TodoMainComponent;
  let fixture: ComponentFixture<TodoMainComponent>;
  let service: TodoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TodoMainComponent],
      providers: [autoMock(TodoService)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(TodoMainComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(TodoService);
    spyOn(service, 'getItems').and.returnValue(of([]));

    fixture.detectChanges();
  }));

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));
});
