import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deleteTodo', () => {
    it('should not call emit method when user hits cancel', () => {
      // arrange
      const emitSpy = spyOn(component.todoDeleted, 'emit');
      spyOn(window, 'confirm').and.returnValue(false);

      // act
      component.deleteTodo(null);

      // assert
      expect(emitSpy).not.toHaveBeenCalled();
    });

    it('should call emit method when user hits okay', () => {
      // arrange
      const emitSpy = spyOn(component.todoDeleted, 'emit');
      spyOn(window, 'confirm').and.returnValue(true);

      // act
      component.deleteTodo(null);

      // assert
      expect(emitSpy).toHaveBeenCalled();
    });
  });

  describe('markAsDone', () => {
    it('should not call emit method when user hits cancel', () => {
      // arrange
      const emitSpy = spyOn(component.todoMarkedAsDone, 'emit');

      // act
      component.markAsDone(null);

      // assert
      expect(emitSpy).toHaveBeenCalled();
    });
  });
});
