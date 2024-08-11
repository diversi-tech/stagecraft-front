// import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { VideoWatchServiceService } from '../../service/vidio/VideoWatchService.service';
// @Component({
//   selector: 'app-vidio',
//   templateUrl: './vidio.component.html',
//   styleUrls: ['./vidio.component.css']
// })

// export class VidioComponent implements OnInit, AfterViewInit {
//   @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
//   private videoId = 'unique-video-id'; // יש להשתמש ב-id ייחודי לכל סרטון
// @Input() currentVideoClass! : string;
//   constructor(private videoWatchService: VideoWatchServiceService, private httpClient: HttpClient) { }
//   videoUrl = 'https://diversitech.stagecraft.s3.eu-north-1.amazonaws.com/ace3deb7-0c7c-4586-9152-8eaf64796272_1000059451.mp4'; // ה-URL שהתקבל

//   ngOnInit() {
//     // נוכל לוודא אם הסרטון נצפה קודם, אך איננו ניגשים ל-nativeElement כאן.
//     // אם זו הפעם הראשונה שהמשתמש רואה את הסרטון, נשמור את המידע בלבד וננעל לאחר view init
//     if (!this.videoWatchService.hasWatched(this.videoId)) {
//       this.lockSeeking = this.lockSeeking.bind(this);
//     }
//   }

  


//   ngAfterViewInit() {
//     this.loadVideo();
//     const videoElement = this.videoPlayer.nativeElement;

//     if (!this.videoWatchService.hasWatched(this.videoId)) {
//       this.lockSeeking();
//     }

//     videoElement.addEventListener('ended', () => {
//       this.videoWatchService.setWatched(this.videoId);
//       this.unlockSeeking();
//     });
//   }

//   private loadVideo() {
//     const videoUrl = 'https://diversitech.stagecraft.s3.eu-north-1.amazonaws.com/ace3deb7-0c7c-4586-9152-8eaf64796272_1000059451.mp4'; // ה-URL שהתקבל מהשרת

//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'video/mp4',
//       }),
//       responseType: 'blob' as 'json'
//     };
    
//     this.httpClient.get(this.videoUrl, httpOptions).subscribe(response => {
//       const videoBlob = new Blob([response as BlobPart], { type: 'video/mp4' });
//       const videoUrl = URL.createObjectURL(videoBlob);
//       this.videoUrl = videoUrl;
//     });
    
//   }


//   private lockSeeking() {
//     const videoElement = this.videoPlayer.nativeElement;
//     let lastTime = 0;

//     videoElement.addEventListener('seeking', (event) => {
//       if (!this.videoWatchService.hasWatched(this.videoId) && videoElement.currentTime > lastTime) {
//         videoElement.currentTime = lastTime;
//       }
//       lastTime = videoElement.currentTime;
//     });
//   }

//   private unlockSeeking() {
//     const videoElement = this.videoPlayer.nativeElement;
//     videoElement.controls = true;
//     // ניתן לשחרר את הנעילה באופן נוסף
//     videoElement.removeEventListener('seeking', () => { });
//   } 
  

// import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
// import { FileService } from 'src/app/service/file.service'; // מוודא שהשירות שלך מיובא

// @Component({
//   selector: 'app-vidio',
//   templateUrl: './vidio.component.html',
//   styleUrls: ['./vidio.component.css']
// })
// export class VidioComponent implements OnInit, AfterViewInit {
//   @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
//   private videoId = 'unique-video-id'; // יש להשתמש ב-id ייחודי לכל סרטון
//   @Input() currentVideoClass!: string;

//   constructor(
//     private fileService: FileService // הוספת ה-fileService בשדה הקונסטרקטור
//   ) { }

//   videoUrl: string | undefined;

//   ngOnInit() {
//     console.log('ngOnInit: Initializing component');

//     if (!this.videoId) {
//       this.lockSeeking = this.lockSeeking.bind(this);
//       console.log('Video has not been watched before, locking seeking.');
//     }
//   }

//   ngAfterViewInit() {
//     console.log('ngAfterViewInit: View initialized, loading video');
//     this.loadVideo();

//     // מניעת לחיצה ימנית על וידאו
//     document.addEventListener('contextmenu', (event: MouseEvent) => {
//       const target = event.target as HTMLElement;
//       if (target.nodeName === 'VIDEO') {
//         event.preventDefault();
//       }
//     });

//     const videoElement = this.videoPlayer.nativeElement;

//     if (!this.videoId) {
//       this.lockSeeking();
//     }

//     videoElement.addEventListener('ended', () => {
//       console.log('Video ended, unlocking seeking');
//       this.unlockSeeking();
//     });
//   }

//   private loadVideo() {
//     const s3FileUrl = 'http://s3.eu-north-1.amazonaws.com/diversitech.stagecraft/014e3b96-01b9-44ac-8e46-6ef5d57293d6_AAA.mp4'; // ה-URL שמגיע מ-S3

//     console.log('Sending request to API to fetch video from S3');

//     this.fileService.getFile(s3FileUrl).subscribe(
//       response => {
//         console.log('Video successfully fetched from API');
//         const videoBlob = new Blob([response], { type: 'video/mp4' });
//         const videoUrl = URL.createObjectURL(videoBlob);
//         this.videoUrl = videoUrl;

//         const videoElement = this.videoPlayer.nativeElement;
//         videoElement.src = videoUrl; // הגדרת מקור הווידאו לאחר שליפתו מה-API
//       },
//       error => {
//         console.error('Error fetching video from API:', error);
//       }
//     );
//   }

//   private lockSeeking() {
//     const videoElement = this.videoPlayer.nativeElement;
//     let lastTime = 0;

//     videoElement.addEventListener('seeking', (event) => {
//       if (!this.videoId && videoElement.currentTime > lastTime) {
//         console.log('Seeking detected, locking at', lastTime);
//         videoElement.currentTime = lastTime;
//       }
//       lastTime = videoElement.currentTime;
//     });
//   }

//   private unlockSeeking() {
//     const videoElement = this.videoPlayer.nativeElement;
//     videoElement.controls = true;
//     console.log('Unlocking seeking');
//     videoElement.removeEventListener('seeking', () => { });
//   }
// }


//   // private lockSeeking() {
//   //   const videoElement = this.videoPlayer.nativeElement;
//   //   let lastTime = 0;

//   //   videoElement.addEventListener('seeking', (event) => {
//   //     if (!this.videoWatchService.hasWatched(this.videoId) && videoElement.currentTime > lastTime) {
//   //       console.log('Seeking detected, locking at', lastTime);
//   //       videoElement.currentTime = lastTime;
//   //     }
//   //     lastTime = videoElement.currentTime;
//   //   });
//   // }

//   // private unlockSeeking() {
//   //   const videoElement = this.videoPlayer.nativeElement;
//   //   videoElement.controls = true;
//   //   console.log('Unlocking seeking');
//   //   videoElement.removeEventListener('seeking', () => { });
//   // }


// ----לא עובד
// import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
// import { FileService } from 'src/app/service/file.service'; // מוודא שהשירות שלך מיובא

// @Component({
//    selector: 'app-vidio',
//       templateUrl: './vidio.component.html',
//   styleUrls: ['./vidio.component.css']
// })
// export class VidioComponent implements OnInit {
//   @ViewChild('fileViewer', { static: true }) fileViewer!: ElementRef<HTMLDivElement>; // שימוש ב-div כללי לתצוגת הקבצים
//   @Input() fileUrl: string | undefined;
//   @Input() fileType: string | undefined; // סוג הקובץ (image, video, pdf, text וכו')

//   constructor(private fileService: FileService) { }

//   ngOnInit() {
//     console.log('ngOnInit: Initializing component');
//     this.loadFile();
//   }
//   private getMimeType(fileName: string): string {
//     const extension = fileName.split('.').pop()?.toLowerCase();
  
//     switch (extension) {
//       case 'jpg':
//       case 'jpeg':
//         return 'image/jpeg';
//       case 'png':
//         return 'image/png';
//       case 'gif':
//         return 'image/gif';
//       case 'mp4':
//         return 'video/mp4';
//       case 'pdf':
//         return 'application/pdf';
//       case 'txt':
//         return 'text/plain';
//       case 'html':
//         return 'text/html';
//       case 'css':
//         return 'text/css';
//       case 'js':
//         return 'application/javascript';
//       default:
//         return 'application/octet-stream';
//     }
//   }
  
//   private loadFile() {
//     if (this.fileUrl && this.fileType) {
//       const encodedUrl = encodeURIComponent(this.fileUrl);
//       console.log('Sending request to API to fetch file from S3:', encodedUrl);

//       this.fileService.getFile(this.fileUrl).subscribe(
//         response => {
//           console.log('File successfully fetched from API');
          
//           // ודא ש-fileType לא undefined
//           const fileType = this.fileType || 'application/octet-stream'; // שימוש ב-default במקרה ש-fileType לא מוגדר
      
//           const fileBlob = new Blob([response], { type: this.getMimeType(fileType) });
//           const fileUrl = URL.createObjectURL(fileBlob);
      
//           this.displayFile(fileUrl, fileType);
//         },
//         error => {
//           console.error('Error fetching file from API:', error);
//         }
//       );
//     }      
//   }
//   private displayFile(fileUrl: string, fileType: string) {
//     const viewer = this.fileViewer.nativeElement;
    
//     // איפוס תוכן ה-div
//     viewer.innerHTML = '';
  
//     switch (fileType) {
//       case 'image':
//         viewer.innerHTML = `<img src="${fileUrl}" alt="Your image" style="max-width: 100%; height: auto;" />`;
//         break;
//       case 'video':
//         viewer.innerHTML = `<video src="${fileUrl}" controls style="max-width: 100%; height: auto;">
//                               Your browser does not support the video tag.
//                             </video>`;
//         break;
//       case 'pdf':
//         viewer.innerHTML = `<iframe src="${fileUrl}" style="width: 100%; height: 500px;">
//                               Your browser does not support iframes.
//                             </iframe>`;
//         break;
//       case 'text':
//         viewer.innerHTML = `<iframe src="${fileUrl}" style="width: 100%; height: 500px;">
//                               Your browser does not support iframes.
//                             </iframe>`;
//         break;
//       default:
//         viewer.innerHTML = `<iframe src="${fileUrl}" style="width: 100%; height: 500px;">
//                               Your browser does not support iframes.
//                             </iframe>`;
//         break;
//     }
//   }
// }
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
import { FileService } from 'src/app/service/file.service'; // מוודא שהשירות שלך מיובא

@Component({
  selector: 'app-vidio',
  templateUrl: './vidio.component.html',
  styleUrls: ['./vidio.component.css']
})
export class VidioComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>; // מאפשר גישה לאלמנט הוידאו מתוך ה-HTML באמצעות ViewChild
  
  videoUrl: string = ' '; // משתנה שמחזיק את ה-URL של הוידאו
  pdfUrl: string = ''; // משתנה שמחזיק את ה-URL של ה-PDF (במידה ונדרש)

  constructor(private fileService: FileService) {} // הזרקת התלות ב-FileService

  ngOnInit(): void {
    // טוען את הוידאו עבור שיעור 4 בקורס 100
    this.loadVideo(100, 1);
  }

  loadVideo(courseId: number, lessonId: number): void {
    // שולח את הבקשה ל-API לקבלת ה-URL של הוידאו על פי מספר הקורס והשיעור
    this.fileService.getVideoUrl(courseId, lessonId).subscribe(videoUrl => {
      console.log('Video URL from API:', videoUrl); // הדפסת ה-URL שהתקבל מה-API
      
      // משתמש ב-URL שהתקבל כדי לשלוף את הוידאו מ-S3 דרך ה-API שלך
      this.fileService.getFile(videoUrl).subscribe(blob => {
        const tempUrl = URL.createObjectURL(blob); // שמירת ה-URL של הוידאו בתוך משתנה זמני
        this.videoUrl = tempUrl; // שמירת ה-URL שנוצר בתוך המשתנה videoUrl
        console.log('Video URL:', this.videoUrl); // הדפסת ה-URL שנוצר

        // מחכה לטעינת הוידאו אחרי קבלת ה-URL מ-API
        this.loadLessonFiles(this.videoUrl);
      });
    });
  }

  ngAfterViewInit(): void {
    const videoElement = this.videoPlayer.nativeElement; // גישה לאלמנט הוידאו

    if (videoElement) {
      this.lockSeeking(videoElement); // נעילת האפשרות לדלג בוידאו בתחילת ההקרנה

      videoElement.addEventListener('ended', () => { // כאשר הוידאו מסתיים
        console.log('Video ended, unlocking seeking');
        this.unlockSeeking(videoElement); // שחרור נעילת האפשרות לדלג בסוף הוידאו
      });
    }
  }

  // פונקציה שמביאה את הקובץ מ-S3 דרך ה-API ומציגה אותו
  loadLessonFiles(videoKey: string): void {
    this.fileService.getFile(videoKey).subscribe(blob => {
      console.log('the blob:', blob); // הדפסת ה-BLOB שהתקבל מהשרת
      const tempUrl = URL.createObjectURL(blob); // שמירת ה-URL במשתנה tempUrl
      this.videoUrl = tempUrl; // שמירת ה-URL שנוצר במשתנה videoUrl
      console.log('the URL:', this.videoUrl); // הדפסת ה-URL שנוצר
    });
  }

  // פונקציה שנועלת את האפשרות לדלג (Seeking) בוידאו
  private lockSeeking(videoElement: HTMLVideoElement): void {
    let lastTime = 0; // משתנה שמחזיק את הזמן האחרון שניתן לצפות בו

    videoElement.addEventListener('seeking', (event) => {
      if (videoElement.currentTime > lastTime) { // אם המשתמש מנסה לדלג
        console.log('Seeking detected, locking at', lastTime);
        videoElement.currentTime = lastTime; // החזרת הוידאו לזמן האחרון שנצפה
      }
      lastTime = videoElement.currentTime; // עדכון הזמן האחרון
    });
  }

  // פונקציה שמשחררת את נעילת הדילוג (Seeking)
  private unlockSeeking(videoElement: HTMLVideoElement): void {
    videoElement.controls = true; // החזרת השליטה בוידאו למשתמש
    videoElement.removeEventListener('seeking', () => {}); // הסרת אירוע הדילוג
    console.log('Unlocking seeking');
  }
}
