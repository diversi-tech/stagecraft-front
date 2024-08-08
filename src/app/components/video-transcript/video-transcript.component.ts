import { Component } from '@angular/core';
import { FileService } from 'src/app/service/file.service';

interface TranscriptSegment {
  startTime: string;
  endTime: string;
  text: string;
}

@Component({
  selector: 'app-video-transcript',
  templateUrl: './video-transcript.component.html',
  styleUrls: ['./video-transcript.component.css']
})
export class VideoTranscriptComponent {
  videoUrl: any;
  transcriptText: any;
  displayedText: string = ''; // הגדרת משתנה שמכיל את הטקסט שמוצג

  constructor(private FileService: FileService) { }

  ngOnInit(): void {
    const courseId = 100;  // עדכני עם הקורס המבוקש
    const lessonId = 4;  // עדכני עם השיעור המבוקש

    // שליפת URL של הווידאו
    this.FileService.getVideoUrl(courseId, lessonId).subscribe(
      url => this.videoUrl = url
    );

    const videoId = 2; // עדכני עם מזהה הווידאו

    this.FileService.getTranscriptUrl(videoId).subscribe(
      transcriptText => {
        console.log('Transcript Text:', transcriptText);  // הדפסת התמלול שהתקבל מהשרת
        this.transcriptText = transcriptText;  // שמירה של התמלול להצגה בקומפוננטה

        // פריסת התמלול
        const parsedTranscript = this.parseTTV(transcriptText);

        // מציאת רכיב הווידאו
        const videoElement = document.querySelector('video') as HTMLVideoElement;

        // התחלת הסנכרון של התמלול עם הווידאו
        this.displayTranscript(videoElement, parsedTranscript);
      },
      error => {
        console.error('Error fetching transcript:', error);  // הדפסת הודעת שגיאה במקרה של בעיה
      }
    );
  }

  timeToSeconds(time: string): number {
    const parts = time.split(':');
    return parseFloat(parts[0]) * 3600 + parseFloat(parts[1]) * 60 + parseFloat(parts[2].replace(',', '.'));
  }

  displayTranscript(videoElement: HTMLVideoElement, transcript: TranscriptSegment[]) {
    videoElement.ontimeupdate = () => {
      const currentTime = videoElement.currentTime;
      console.log('Current Time:', currentTime);
      const currentSegment = transcript.find(segment => {
        const startTimeSeconds = this.timeToSeconds(segment.startTime);
        const endTimeSeconds = this.timeToSeconds(segment.endTime);
        console.log('Checking Segment:', segment, startTimeSeconds, endTimeSeconds);
        return startTimeSeconds <= currentTime && endTimeSeconds >= currentTime;
      });
      if (currentSegment && this.displayedText !== currentSegment.text) {
        console.log('Switching to new segment:', currentSegment.text);  // הדפסת שורת התמלול החדשה
        this.displayedText = currentSegment.text;
      } else if (!currentSegment) {
        console.log('No matching segment found for current time.');
      }
    };
  }

  parseTTV(ttvContent: string): TranscriptSegment[] {
    // חלוקת התוכן לשורות
    const lines = ttvContent.split('\n');
    const segments: TranscriptSegment[] = [];
    
    // מעבר על כל שורה ובדיקת הפורמט
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.includes('-->')) {
        const times = line.split(' --> ');
        const startTime = times[0].trim();
        const endTime = times[1].trim();
        const text = lines[i + 1] ? lines[i + 1].trim() : '';
        segments.push({ startTime, endTime, text });
        i++; // דילוג על השורה הבאה שהיא הטקסט
      }
    }
    
    return segments;
  }
  subtitlesVisible: boolean = true;

toggleSubtitles() {
  this.subtitlesVisible = !this.subtitlesVisible;
}

}
