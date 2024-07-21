import { Component, Input } from '@angular/core';
import { FeedbackService } from 'src/app/service/feedback.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  @Input() userId: number = 0;
  feedbackFile: File | null = null;

  constructor(private feedbackService: FeedbackService, private location: Location) {}

  onFileChange(event: any): void {
    this.feedbackFile = event.target.files[0];
  }

  uploadFeedback(): void {
    if (this.feedbackFile && this.isSubscriptionValid()) {
      this.feedbackService.uploadFeedback(this.userId, this.feedbackFile).subscribe(response => {
        console.log('Feedback uploaded successfully', response);
      });
    } else {
      console.error('Invalid subscription or no file selected');
    }
  }

  isSubscriptionValid(): boolean {
    // Replace this logic with your actual subscription check
    return true; // Temporary value, change to actual validation logic
  }

  goBack(): void {
    this.location.back();
  }
}
