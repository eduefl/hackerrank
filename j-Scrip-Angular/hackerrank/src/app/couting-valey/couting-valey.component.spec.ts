import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutingValeyComponent } from './couting-valey.component';

describe('CoutingValeyComponent', () => {
  let component: CoutingValeyComponent;
  let fixture: ComponentFixture<CoutingValeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoutingValeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutingValeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
