import { TestBed } from '@angular/core/testing';

import { TwitterManagementStateService } from './twitter-management-state.service';

describe('TwitterManagementStateService', () => {
  let service: TwitterManagementStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterManagementStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
