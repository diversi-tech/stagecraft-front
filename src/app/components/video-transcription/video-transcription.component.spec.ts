import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTranscriptionComponent } from './video-transcription.component';

describe('VideoTranscriptionComponent', () => {
  let component: VideoTranscriptionComponent;
  let fixture: ComponentFixture<VideoTranscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTranscriptionComponent]
    });
    fixture = TestBed.createComponent(VideoTranscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
