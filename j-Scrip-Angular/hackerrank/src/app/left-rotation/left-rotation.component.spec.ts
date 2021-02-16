import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRotationComponent } from './left-rotation.component';

describe('LeftRotationComponent', () => {
  let component: LeftRotationComponent;
  let fixture: ComponentFixture<LeftRotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftRotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
