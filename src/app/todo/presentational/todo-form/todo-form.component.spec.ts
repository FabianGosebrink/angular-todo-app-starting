import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.form).toBeTruthy();
  });

  describe('addTodo', () => {
    it('should throw event when add method is called', () => {
      // arrange
      component.form.setValue({ todoValue: 'my-todovalue' });
      const emitSpy = spyOn(component.todoAdded, 'emit');

      // act
      component.addTodo();

      // assert
      expect(emitSpy).toHaveBeenCalledOnceWith('my-todovalue');
    });
  });

  describe('add', () => {
    const testCases = [
      { a: 5, b: 10, expectedResult: 15 },
      { a: 5, b: 10, expectedResult: 15 },
      { a: 5, b: 10, expectedResult: 15 },
      { a: 5, b: 10, expectedResult: 15 },
      { a: 5, b: 10, expectedResult: 15 },
      { a: 5, b: 10, expectedResult: 15 },
    ];

    testCases.forEach(({ expectedResult, a, b }) => {
      it(`should return ${expectedResult} when input is ${a} and ${b}`, () => {
        //arrange

        //act
        const result = component.add(a, b);

        //assert
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
