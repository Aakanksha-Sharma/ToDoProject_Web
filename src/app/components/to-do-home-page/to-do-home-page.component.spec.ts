import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoHomePageComponent } from './to-do-home-page.component';

describe('ToDoHomePageComponent', () => {
  let component: ToDoHomePageComponent;
  let fixture: ComponentFixture<ToDoHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoHomePageComponent]
    });
    fixture = TestBed.createComponent(ToDoHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
