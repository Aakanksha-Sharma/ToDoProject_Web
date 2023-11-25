import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodoComponentComponent } from './view-todo-component.component';

describe('ViewTodoComponentComponent', () => {
  let component: ViewTodoComponentComponent;
  let fixture: ComponentFixture<ViewTodoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTodoComponentComponent]
    });
    fixture = TestBed.createComponent(ViewTodoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
