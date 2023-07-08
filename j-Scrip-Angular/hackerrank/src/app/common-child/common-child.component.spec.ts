import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChildComponent } from './common-child.component';

describe('CommonChildComponent', () => {
  let component: CommonChildComponent;
  let fixture: ComponentFixture<CommonChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
