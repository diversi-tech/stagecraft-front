import { Component,Input, OnInit ,OnChanges} from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class progressbarComponent //implements OnInit,OnChanges
{
  
  @Input() userId: number = 0;
  @Input() coursesId: number = 0;

  progress: number = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    console.log('ngOnInit called in ProgressbarComponent');
    console.log('userId:', this.userId);
    console.log('coursesId:', this.coursesId);


    if (this.userId && this.coursesId) {
      this.getUserProgress();
    }
  }

  getUserProgress(): void {
    console.log('Fetching user progress');
    this.courseService.GetUserProgress(this.userId, this.coursesId).subscribe(
      (data: any) => {
        console.log('Received data:', data);
        this.progress = data; // כאן צריך לוודא שהנתונים שמתקבלים הם בפורמט נכון
      },
      (error: any) => {
        console.error('Error fetching user progress:', error);
      }
    );
  // ngOnInit(): void {
  //   this.calculateProgress();
  // }

  // ngOnChanges(): void {
  //   this.calculateProgress();
  // }

  // calculateProgress(): void {
  //   if (this.totalParts > 0) {
  //     this.progress = (this.watchedParts / this.totalParts) * 100;
  //   }
  // }
}
}
