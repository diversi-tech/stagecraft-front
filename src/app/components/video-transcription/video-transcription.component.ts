import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranscriptionService } from '../../service/transcription.service';

interface TranscriptSegment {
  time: number;
  text: string;
}

@Component({
  selector: 'app-video-transcription',
  templateUrl: './video-transcription.component.html',
  styleUrls: ['./video-transcription.component.css']
})
export class VideoTranscriptionComponent implements OnInit {
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  transcriptSegments: TranscriptSegment[] = [];
  currentTranscript: string = '';
  constructor(private transcriptionService: TranscriptionService) {}

  ngOnInit(): void {
    this.loadTranscript();
  }

  loadTranscript(): void {
    const videoId = 1; // ניתן לשנות לפי הצורך
    this.transcriptionService.getTranscript(videoId).subscribe(
      response => {
        this.transcriptSegments = response;
        this.setupVideoEventListeners();
      },
      error => {
        console.error('Error fetching transcript:', error);
      }
    );
  }

  setupVideoEventListeners(): void {
    const video = this.videoPlayer.nativeElement as HTMLVideoElement;
    video.addEventListener('timeupdate', () => {
      this.updateTranscript(video.currentTime);
    });
  }

  updateTranscript(currentTime: number): void {
    const segment = this.transcriptSegments.find(seg => seg.time <= currentTime && currentTime < seg.time + 10);
    if (segment) {
      this.currentTranscript = segment.text;
    }

  }
}
