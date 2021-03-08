import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingComparatorComponent } from './sorting-comparator.component';

describe('SortingComparatorComponent', () => {
  let component: SortingComparatorComponent;
  let fixture: ComponentFixture<SortingComparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingComparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
