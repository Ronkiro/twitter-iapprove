import { TestBed } from '@angular/core/testing';

import { TwitterSearchFacadeService } from './twitter-search-facade.service';

describe('TwitterSearchFacadeService', () => {
  let service: TwitterSearchFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterSearchFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
