import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A2DArrayDsComponent } from './a2-darray-ds.component';

describe('A2DArrayDsComponent', () => {
  let component: A2DArrayDsComponent;
  let fixture: ComponentFixture<A2DArrayDsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A2DArrayDsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A2DArrayDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
