import { TestBed } from '@angular/core/testing';
import { BeeworkerService } from './beeworker.service';


describe('BeeworkerService', () => {
  let service: BeeworkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeeworkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
