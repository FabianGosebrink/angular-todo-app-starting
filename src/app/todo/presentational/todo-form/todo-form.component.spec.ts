import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, TodoFormComponent],
});

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.form.value.todoValue).toBe('');
  });

  describe('addTodo', () => {
    it('should call emit method', () => {
      // arrange
      component.form.setValue({ todoValue: 'my-super-duper-todo' });
      const emitSpy = spyOn(component.todoAdded, 'emit');

      // act
      component.addTodo();

      // assert
      expect(emitSpy).toHaveBeenCalled();
      expect(emitSpy).toHaveBeenCalledWith('my-super-duper-todo');
    });

    it('should render value when form value is set', () => {
      // arrange
      component.form.setValue({ todoValue: 'my-super-duper-todo' });

      // act
      fixture.detectChanges();

      // assert
      const input = fixture.debugElement.query(By.css('input'));
      expect(input.nativeElement.value).toEqual('my-super-duper-todo');
    });
  });
});
