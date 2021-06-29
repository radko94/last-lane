import { TestBed } from '@angular/core/testing';

import { CommunityHomeProxyService } from './community-home-proxy.service';

describe('CommunityHomeProxyService', () => {
  let service: CommunityHomeProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityHomeProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
