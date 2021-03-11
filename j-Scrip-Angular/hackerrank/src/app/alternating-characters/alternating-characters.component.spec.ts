import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternatingCharactersComponent } from './alternating-characters.component';

describe('AlternatingCharactersComponent', () => {
  let component: AlternatingCharactersComponent;
  let fixture: ComponentFixture<AlternatingCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternatingCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternatingCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
