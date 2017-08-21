import { TestBed, inject } from '@angular/core/testing';

import { UserBackendService } from './user-backend.service';

describe('UserBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBackendService]
    });
  });

  it('should be created', inject([UserBackendService], (service: UserBackendService) => {
    expect(service).toBeTruthy();
  }));
});
