import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { mockClass } from '../../../../testing/auto-mock';
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
      providers: [
        { provide: TodoDataService, useClass: mockClass(TodoDataService) },
      ],
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
});
