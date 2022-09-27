import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhmemberComponent } from './rhmember.component';

describe('RhmemberComponent', () => {
  let component: RhmemberComponent;
  let fixture: ComponentFixture<RhmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
