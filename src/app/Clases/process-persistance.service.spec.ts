import { TestBed } from '@angular/core/testing';

import { ProcessPersistanceService } from './process-persistance.service';

describe('ProcessPersistanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessPersistanceService = TestBed.get(ProcessPersistanceService);
    expect(service).toBeTruthy();
  });
});
