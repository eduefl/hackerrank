import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumSwaps2Component } from './minimum-swaps2.component';

describe('MinimumSwaps2Component', () => {
  let component: MinimumSwaps2Component;
  let fixture: ComponentFixture<MinimumSwaps2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimumSwaps2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimumSwaps2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
