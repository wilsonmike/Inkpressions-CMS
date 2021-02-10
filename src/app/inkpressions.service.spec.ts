import { TestBed } from '@angular/core/testing';

import { InkpressionsService } from './inkpressions.service';

describe('InkpressionsService', () => {
  let service: InkpressionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InkpressionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
