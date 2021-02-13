import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByMatchComponent } from './sales-by-match.component';

describe('SalesByMatchComponent', () => {
  let component: SalesByMatchComponent;
  let fixture: ComponentFixture<SalesByMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
