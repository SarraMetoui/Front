import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuetrackComponent } from './issuetrack.component';

describe('IssuetrackComponent', () => {
  let component: IssuetrackComponent;
  let fixture: ComponentFixture<IssuetrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuetrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
