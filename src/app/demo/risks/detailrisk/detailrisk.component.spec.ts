import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailriskComponent } from './detailrisk.component';

describe('DetailriskComponent', () => {
  let component: DetailriskComponent;
  let fixture: ComponentFixture<DetailriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
