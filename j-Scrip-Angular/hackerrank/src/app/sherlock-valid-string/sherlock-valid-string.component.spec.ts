import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SherlockValidStringComponent } from './sherlock-valid-string.component';

describe('SherlockValidStringComponent', () => {
  let component: SherlockValidStringComponent;
  let fixture: ComponentFixture<SherlockValidStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SherlockValidStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SherlockValidStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
