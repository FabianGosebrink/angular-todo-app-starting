import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodoEntryComponent } from './todo-entry.component';

describe('TodoEntryComponent', () => {
  let component: TodoEntryComponent;
  let fixture: ComponentFixture<TodoEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TodoEntryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(TodoEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.items = [];
    expect(component).toBeTruthy();
  });

  describe('asdasd', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
