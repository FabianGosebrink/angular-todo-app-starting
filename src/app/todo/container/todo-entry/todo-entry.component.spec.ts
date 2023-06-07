import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TodoEntryComponent } from './todo-entry.component';

describe('TodoEntryComponent', () => {
  let component: TodoEntryComponent;
  let fixture: ComponentFixture<TodoEntryComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TodoEntryComponent],
    providers: [
        provideMockStore({
            initialState: {
                items: [],
                loading: false,
            },
        }),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
});

    fixture = TestBed.createComponent(TodoEntryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
