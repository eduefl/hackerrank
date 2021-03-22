import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciaStringAgainComponent } from './specia-string-again.component';

describe('SpeciaStringAgainComponent', () => {
  let component: SpeciaStringAgainComponent;
  let fixture: ComponentFixture<SpeciaStringAgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciaStringAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciaStringAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
