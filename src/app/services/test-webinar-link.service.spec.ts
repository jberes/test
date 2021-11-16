import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TestWebinarLinkService } from './test-webinar-link.service';

describe('TestWebinarLinkService', () => {
  let service: TestWebinarLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TestWebinarLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
