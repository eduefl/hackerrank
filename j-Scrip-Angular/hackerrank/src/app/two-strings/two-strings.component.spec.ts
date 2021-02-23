import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStringsComponent } from './two-strings.component';

describe('TwoStringsComponent', () => {
  let component: TwoStringsComponent;
  let fixture: ComponentFixture<TwoStringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoStringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
