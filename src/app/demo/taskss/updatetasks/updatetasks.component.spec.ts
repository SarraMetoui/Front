import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetasksComponent } from './updatetasks.component';

describe('UpdatetasksComponent', () => {
  let component: UpdatetasksComponent;
  let fixture: ComponentFixture<UpdatetasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
