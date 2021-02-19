import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RansonNoteComponent } from './ranson-note.component';

describe('RansonNoteComponent', () => {
  let component: RansonNoteComponent;
  let fixture: ComponentFixture<RansonNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RansonNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RansonNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
