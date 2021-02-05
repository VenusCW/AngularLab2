import { TestBed } from '@angular/core/testing';

import { RedditAppService } from './reddit-app.service';

describe('RedditAppService', () => {
  let service: RedditAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
