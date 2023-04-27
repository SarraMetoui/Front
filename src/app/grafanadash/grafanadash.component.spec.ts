import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafanadashComponent } from './grafanadash.component';

describe('GrafanadashComponent', () => {
  let component: GrafanadashComponent;
  let fixture: ComponentFixture<GrafanadashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafanadashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafanadashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
