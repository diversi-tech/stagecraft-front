import { Component,Input, OnInit,OnChanges } from '@angular/core';
import { TaskFileService } from 'src/app/service/task-files.service';

@Component({
  selector: 'app-task-files',
  templateUrl: './task-files.component.html',
  styleUrls: ['./task-files.component.css']
})
export class TaskFilesComponent implements OnInit,OnChanges{
@Input() videoId: number=0;

taskFiles: any[] = [];

constructor(private taskFileService: TaskFileService) {}

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
}
