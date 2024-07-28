import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const file: File = event.target.files[0];

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
}
