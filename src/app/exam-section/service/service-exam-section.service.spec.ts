import { TestBed } from '@angular/core/testing';

import { ServiceExamSectionService } from './service-exam-section.service';

describe('ServiceExamSectionService', () => {
  let service: ServiceExamSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExamSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
