import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-uploading-file',
  templateUrl: './uploading-file.component.html',
  styleUrls: ['./uploading-file.component.css']
})
export class UploadingFileComponent {
  @Output() fileNameSelected = new EventEmitter<File>();
  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef;
  status: "initial" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = "initial";
      this.file = file;
      this.fileNameSelected.emit(file);
    }
    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file);
    } else {
      alert('Please select a video file.');
      this.file = null; 
    }
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
}
