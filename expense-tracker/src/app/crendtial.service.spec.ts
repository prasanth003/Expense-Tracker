import { TestBed } from '@angular/core/testing';

import { CrendtialService } from './crendtial.service';

describe('CrendtialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrendtialService = TestBed.get(CrendtialService);
    expect(service).toBeTruthy();
  });
});
