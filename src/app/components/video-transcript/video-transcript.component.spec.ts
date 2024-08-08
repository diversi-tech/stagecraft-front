import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTranscriptComponent } from './video-transcript.component';

describe('VideoTranscriptComponent', () => {
  let component: VideoTranscriptComponent;
  let fixture: ComponentFixture<VideoTranscriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTranscriptComponent]
    });
    fixture = TestBed.createComponent(VideoTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
