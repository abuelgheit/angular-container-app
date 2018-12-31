import { TestBed } from '@angular/core/testing';

import { TortogaService } from './tortoga.service';

describe('TortogaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TortogaService = TestBed.get(TortogaService);
    expect(service).toBeTruthy();
  });
});
