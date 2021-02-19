import { TestBed } from '@angular/core/testing';

import { Feed1Service } from './feed1.service';

describe('Feed1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Feed1Service = TestBed.get(Feed1Service);
    expect(service).toBeTruthy();
  });
});
