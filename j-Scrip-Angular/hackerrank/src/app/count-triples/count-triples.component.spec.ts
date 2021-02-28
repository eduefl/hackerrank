import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTriplesComponent } from './count-triples.component';

describe('CountTriplesComponent', () => {
  let component: CountTriplesComponent;
  let fixture: ComponentFixture<CountTriplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountTriplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountTriplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
