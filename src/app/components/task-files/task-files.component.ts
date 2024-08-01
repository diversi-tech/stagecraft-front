import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { TaskFileService } from 'src/app/service/task-files.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FileUploadService } from 'src/app/service/file-upload.service';

@Component({
  selector: 'app-task-files',
  templateUrl: './task-files.component.html',
  styleUrls: ['./task-files.component.css']
})
export class TaskFilesComponent implements OnInit, OnChanges {
  @Input() videoId: number = 0;
  taskFiles: any[] = [];
  

  constructor(private taskFileService: TaskFileService, private location: Location,  private route: ActivatedRoute,
    private fileUploadService: FileUploadService){} // הזרקת שירות ההעלאה) {}

  ngOnInit(): void {
    this.getTaskFiles();
  }

  ngOnChanges(): void {
   
    this.getTaskFiles();
  }

  getTaskFiles(): void {
    if (this.videoId) {
      this.taskFileService.getFilesByVideo(this.videoId).subscribe(files => {
        this.taskFiles = files;
      });
    }
  }
  saveFile(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.fileUploadService.uploadFile(file).subscribe(
        response => {
          console.log('File uploaded successfully', response);
          // ניתן להוסיף כאן לוגיקה נוספת לאחר ההעלאה, כמו עדכון הרשימה המקומית
        },
        error => {
          console.error('Error uploading file', error);
        }
      );
    }
  }
  goBack(): void {
    this.location.back();
  }
}

