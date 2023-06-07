import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideMock } from '../../../testing/auto-mock';
import { HttpService } from './http.service';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService, provideMock(HttpService)],
    });

    service = TestBed.inject(TodoDataService);
    httpService = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getItems', () => {
    it('should get items', waitForAsync(() => {
      const spy = spyOn(httpService, 'get').and.returnValue(
        of([{ id: '1' }, { id: '2' }])
      );

      service.getItems().subscribe(() => {
        expect(spy).toHaveBeenCalled();
      });
    }));
  });
});
