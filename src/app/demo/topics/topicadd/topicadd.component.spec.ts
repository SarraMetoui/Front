import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicaddComponent } from './topicadd.component';

describe('TopicaddComponent', () => {
  let component: TopicaddComponent;
  let fixture: ComponentFixture<TopicaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
