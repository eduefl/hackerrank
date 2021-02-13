import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nubank1Component } from './nubank1.component';

describe('Nubank1Component', () => {
  let component: Nubank1Component;
  let fixture: ComponentFixture<Nubank1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nubank1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nubank1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
