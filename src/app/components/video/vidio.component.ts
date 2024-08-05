import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { VideoWatchServiceService } from '../../service/vidio/VideoWatchService.service';
@Component({
  selector: 'app-vidio',
  templateUrl: './vidio.component.html',
  styleUrls: ['./vidio.component.css']
})

export class VidioComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  private videoId = 'unique-video-id'; // יש להשתמש ב-id ייחודי לכל סרטון
@Input() currentVideoClass! : string;
  constructor(private videoWatchService: VideoWatchServiceService, private httpClient: HttpClient) { }
  videoUrl = 'https://diversitech.stagecraft.s3.eu-north-1.amazonaws.com/ace3deb7-0c7c-4586-9152-8eaf64796272_1000059451.mp4'; // ה-URL שהתקבל

  ngOnInit() {
    // נוכל לוודא אם הסרטון נצפה קודם, אך איננו ניגשים ל-nativeElement כאן.
    // אם זו הפעם הראשונה שהמשתמש רואה את הסרטון, נשמור את המידע בלבד וננעל לאחר view init
    if (!this.videoWatchService.hasWatched(this.videoId)) {
      this.lockSeeking = this.lockSeeking.bind(this);
    }
  }

  


  ngAfterViewInit() {
    this.loadVideo();
    const videoElement = this.videoPlayer.nativeElement;

    if (!this.videoWatchService.hasWatched(this.videoId)) {
      this.lockSeeking();
    }

    videoElement.addEventListener('ended', () => {
      this.videoWatchService.setWatched(this.videoId);
      this.unlockSeeking();
    });
  }

  private loadVideo() {
    const videoUrl = 'https://diversitech.stagecraft.s3.eu-north-1.amazonaws.com/ace3deb7-0c7c-4586-9152-8eaf64796272_1000059451.mp4'; // ה-URL שהתקבל מהשרת

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'video/mp4',
      }),
      responseType: 'blob' as 'json'
    };
    
    this.httpClient.get(this.videoUrl, httpOptions).subscribe(response => {
      const videoBlob = new Blob([response as BlobPart], { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(videoBlob);
      this.videoUrl = videoUrl;
    });
    
  }


  private lockSeeking() {
    const videoElement = this.videoPlayer.nativeElement;
    let lastTime = 0;

    videoElement.addEventListener('seeking', (event) => {
      if (!this.videoWatchService.hasWatched(this.videoId) && videoElement.currentTime > lastTime) {
        videoElement.currentTime = lastTime;
      }
      lastTime = videoElement.currentTime;
    });
  }

  private unlockSeeking() {
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.controls = true;
    // ניתן לשחרר את הנעילה באופן נוסף
    videoElement.removeEventListener('seeking', () => { });
  } 
  

}