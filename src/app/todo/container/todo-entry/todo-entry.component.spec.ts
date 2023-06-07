import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { provideMock } from '../../../../testing/auto-mock';
import { TodoDataService } from '../../services/todo-data.service';
import { TodoEntryComponent } from './todo-entry.component';

describe('TodoEntryComponent', () => {
  let component: TodoEntryComponent;
  let fixture: ComponentFixture<TodoEntryComponent>;
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TodoEntryComponent],
      providers: [provideMock(TodoDataService)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(TodoEntryComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(TodoDataService);
  });

  it('should create', () => {
    spyOn(service, 'getItems').and.returnValue(of([]));

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  describe('addTodo', () => {
    it('should call service and pass item', () => {
      // arrange
      const spy = spyOn(service, 'addTodo').and.returnValue(of(null));

      // act
      component.addTodo('my value');

      // assert
      expect(spy).toHaveBeenCalledWith('my value');
    });
  });
});
