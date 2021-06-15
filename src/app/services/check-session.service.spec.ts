import { TestBed } from '@angular/core/testing';

import { CheckSessionService } from './check-session.service';

describe('CheckSessionService', () => {
  let service: CheckSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
