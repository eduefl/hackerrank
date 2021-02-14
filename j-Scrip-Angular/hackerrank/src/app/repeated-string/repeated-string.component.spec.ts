import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatedStringComponent } from './repeated-string.component';

describe('RepeatedStringComponent', () => {
  let component: RepeatedStringComponent;
  let fixture: ComponentFixture<RepeatedStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatedStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatedStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
