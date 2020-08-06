import { TestBed } from '@angular/core/testing';

import { TweetManagementFacadeService } from './tweet-management-facade.service';

describe('TweetManagementFacadeService', () => {
  let service: TweetManagementFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetManagementFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
