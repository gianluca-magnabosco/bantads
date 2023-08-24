import { TestBed } from '@angular/core/testing';

import { BuscaCEPService } from './busca-cep.service';

describe('BuscaCEPService', () => {
  let service: BuscaCEPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaCEPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
