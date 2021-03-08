import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudulentActivityNotificationsComponent } from './fraudulent-activity-notifications.component';

describe('FraudulentActivityNotificationsComponent', () => {
  let component: FraudulentActivityNotificationsComponent;
  let fixture: ComponentFixture<FraudulentActivityNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudulentActivityNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudulentActivityNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
