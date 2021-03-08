import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortCountingInversionsComponent } from './merge-sort-counting-inversions.component';

describe('MergeSortCountingInversionsComponent', () => {
  let component: MergeSortCountingInversionsComponent;
  let fixture: ComponentFixture<MergeSortCountingInversionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeSortCountingInversionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSortCountingInversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
