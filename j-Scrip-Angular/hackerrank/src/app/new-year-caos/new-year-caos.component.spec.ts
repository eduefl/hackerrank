import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearCaosComponent } from './new-year-caos.component';

describe('NewYearCaosComponent', () => {
  let component: NewYearCaosComponent;
  let fixture: ComponentFixture<NewYearCaosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewYearCaosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewYearCaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
