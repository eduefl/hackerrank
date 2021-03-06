import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyQueriesComponent } from './frequency-queries.component';

describe('FrequencyQueriesComponent', () => {
  let component: FrequencyQueriesComponent;
  let fixture: ComponentFixture<FrequencyQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
