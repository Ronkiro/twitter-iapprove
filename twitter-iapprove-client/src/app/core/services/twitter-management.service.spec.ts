import { TestBed } from '@angular/core/testing';

import { TwitterManagementService } from './twitter-management.service';

describe('TwitterManagementService', () => {
  let service: TwitterManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
