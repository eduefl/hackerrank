import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SherlockComponent } from './sherlock.component';

describe('SherlockComponent', () => {
  let component: SherlockComponent;
  let fixture: ComponentFixture<SherlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SherlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SherlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
