import { TestBed } from '@angular/core/testing';

import { ServicioClasesService } from './servicio-clases.service';

describe('ServicioClasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioClasesService = TestBed.get(ServicioClasesService);
    expect(service).toBeTruthy();
  });
});
