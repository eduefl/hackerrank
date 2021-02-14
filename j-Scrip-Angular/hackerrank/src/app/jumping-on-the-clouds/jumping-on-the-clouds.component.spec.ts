import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingOnTheCloudsComponent } from './jumping-on-the-clouds.component';

describe('JumpingOnTheCloudsComponent', () => {
  let component: JumpingOnTheCloudsComponent;
  let fixture: ComponentFixture<JumpingOnTheCloudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpingOnTheCloudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpingOnTheCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
