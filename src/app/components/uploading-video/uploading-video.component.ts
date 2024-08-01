import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FileUploadService } from 'src/app/service/file-upload.service';

@Component({
  selector: 'app-uploading-video',
  templateUrl: './uploading-video.component.html',
  styleUrls: ['./uploading-video.component.css']
})
export class UploadingVideoComponent {
  @Output() videoNameSelected = new EventEmitter<File>();
  @ViewChild('fileUpload', { static: false })
  fileUpload!: ElementRef;
  status: "initial" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;

  constructor(private http: HttpClient, private fileUploadService: FileUploadService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const file: File = event.target.files[0];
    this.file = event.target.files[0]; // שמירת הקובץ שנבחר במשתנה


    if (file && file.type.startsWith('video/')) {
      this.status = "initial";
      this.file = file;
      this.videoNameSelected.emit(file);

      if (this.file) {
        const formData = new FormData();
        formData.append("file", this.file);
      } else {
        alert('Please select a video file.');
      }
    } else {
      alert('Please select a video file.');
      this.file = null; 
    }
  }

  triggerFileInput() {
    this.fileUpload.nativeElement.click();
  }
   // פונקציה לשמירת הקובץ בענן
   saveFile(): void {
    if (this.file) {
      this.fileUploadService.uploadFile(this.file).subscribe(
        response => {
          console.log('File uploaded successfully', response); // טיפול בהעלאה מוצלחת
          // ניתן להוסיף לוגיקה נוספת אם נדרש, כמו הצגת הודעה למשתמש
        },
        error => {
          console.error('Error uploading file', error); // טיפול בשגיאה בהעלאה
        }
      );
    } else {
      console.error('No file selected'); // הודעה במקרה שלא נבחר קובץ
    }
  }
}
