import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { autoMock } from '../../testing/auto-mock';
import { Todo } from '../models/todo';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService, autoMock(HttpService)],
    });

    service = TestBed.inject(TodoService);
    httpService = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getItems', () => {
    it('should get all items', waitForAsync(() => {
      // arrange
      spyOn(httpService, 'get').and.returnValue(of([{ id: 'some-id' }]));

      // act
      const result$ = service.getItems();

      // assert
      result$.subscribe((res) => {
        expect(res).toEqual([{ id: 'some-id' }] as Todo[]);
      });
    }));
  });
});
