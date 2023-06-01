import { TestBed } from '@angular/core/testing';

import { NgxLoadingSpinnerService } from './ngx-loading-spinner.service';

describe('NgxLoadingSpinnerService', () => {
  let service: NgxLoadingSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLoadingSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
