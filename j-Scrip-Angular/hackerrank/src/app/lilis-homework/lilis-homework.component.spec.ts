import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LilisHomeworkComponent } from './lilis-homework.component';

describe('LilisHomeworkComponent', () => {
  let component: LilisHomeworkComponent;
  let fixture: ComponentFixture<LilisHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LilisHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LilisHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
