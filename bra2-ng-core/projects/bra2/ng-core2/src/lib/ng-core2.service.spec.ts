import { TestBed } from '@angular/core/testing';

import { NgCore2Service } from './ng-core2.service';

describe('NgCore2Service', () => {
  let service: NgCore2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCore2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
