import { TestBed } from '@angular/core/testing';

import { Bra2NgCoreService } from './bra2-ng-core.service';

describe('Bra2NgCoreService', () => {
  let service: Bra2NgCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bra2NgCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
