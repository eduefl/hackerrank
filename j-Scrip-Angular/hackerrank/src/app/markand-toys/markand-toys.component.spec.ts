import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkandToysComponent } from './markand-toys.component';

describe('MarkandToysComponent', () => {
  let component: MarkandToysComponent;
  let fixture: ComponentFixture<MarkandToysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkandToysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkandToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
