import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranscriptService } from 'src/app/service/transcript.service';

@Component({
  selector: 'app-admin-transcript',
  templateUrl: './admin-transcript.component.html',
  styleUrls: ['./admin-transcript.component.css']
})
export class AdminTranscriptComponent {
  videoId: any;
  transcriptText: any;
  successMessage: any;
  errorMessage: any;
  constructor(private transcriptService: TranscriptService) { }

  onSubmit(): void {
    this.transcriptService.uploadTranscript(this.videoId, this.transcriptText)
      .subscribe(
        (response: any) => {
          this.successMessage = 'Transcript uploaded successfully!';
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Failed to upload transcript. Please try again.';
          this.successMessage = '';
        }
      );
  }

}
