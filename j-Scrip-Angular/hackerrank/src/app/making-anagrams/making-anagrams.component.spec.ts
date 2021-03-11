import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingAnagramsComponent } from './making-anagrams.component';

describe('MakingAnagramsComponent', () => {
  let component: MakingAnagramsComponent;
  let fixture: ComponentFixture<MakingAnagramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingAnagramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingAnagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
