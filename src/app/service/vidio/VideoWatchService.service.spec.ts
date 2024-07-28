import { TestBed } from '@angular/core/testing';

import { VideoWatchServiceService } from './VideoWatchService.service';

describe('VideoWatchServiceService', () => {
  let service: VideoWatchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoWatchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
