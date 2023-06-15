import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { autoMock } from '../../../testing/auto-mock';
import { TodoService } from '../../services/todo.service';
import { TodoMainComponent } from './todo-main.component';

describe('TodoMainComponent', () => {
  let component: TodoMainComponent;
  let fixture: ComponentFixture<TodoMainComponent>;
  let service: TodoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TodoMainComponent],
      providers: [autoMock(TodoService)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(TodoMainComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(TodoService);
    spyOn(service, 'getItems').and.returnValue([]);

    fixture.detectChanges();
  }));

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();

    // check if http call was NOT fired
    tick(250);
    //check if http call was still NOT fired

    tick(150);

    // check if http call WAS fired
  }));
});
