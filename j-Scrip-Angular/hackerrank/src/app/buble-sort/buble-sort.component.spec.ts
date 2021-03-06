import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubleSortComponent } from './buble-sort.component';

describe('BubleSortComponent', () => {
  let component: BubleSortComponent;
  let fixture: ComponentFixture<BubleSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubleSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
