import { Component, OnInit } from '@angular/core';
import { CourseAchievementsService} from '../../service/course-achievements.service';
//import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  courses: any[] = [];
  selectedCourse: any = null;

 

  constructor(private CourseService: CourseAchievementsService) {}

  ngOnInit(): void {
    this.courses = [
      { id: 1, name: 'Dummy Course 1', currentScore: 75, passScore: 60, feedback: 'Great job!' },
      { id: 2, name: 'Dummy Course 2', currentScore: 20, passScore: 30, feedback: 'Keep it up!' }
    ];
    
    //orUser().subscribe(data => {
     // this.courses = data;
    
   // });
  }

  openCourseDetails(courseId: number): void {
   // this.CourseService.getCourseDetails(courseId).subscribe(data => {
    //  this.selectedCourse = data;
   //   this.updateChart(data);
  // this.drawChart(data);
   // });
   this.selectedCourse = this.courses.find(course => course.id === courseId);
    if (this.selectedCourse) {
      this.drawChart(this.selectedCourse);
    }
  }
    // updateChart(course: any): void {
    //   this.chartData = [
    //     { name: 'Current Score', value: course.currentScore },
    //     { name: 'Pass Score', value: course.passScore }
    //   ];
    // }


    drawChart(course: any): void {
      const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
  
      if (ctx) {
        // Clear previous chart
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        const currentScore = course.currentScore;
        const passScore = course.passScore;
  
          // ציור קו עבור currentScore
        ctx.beginPath();
      ctx.moveTo(50, canvas.height - currentScore);
      ctx.lineTo(150, canvas.height - currentScore);
      ctx.strokeStyle = 'rgba(75, 192, 192, 1)';
      ctx.lineWidth = 5;
      ctx.stroke();
  
 // ציור קו עבור passScore
 ctx.beginPath();
 ctx.moveTo(50, canvas.height - passScore);
 ctx.lineTo(150, canvas.height - passScore);
 ctx.strokeStyle = 'rgba(255, 99, 132, 1)';
 ctx.lineWidth = 5;
 ctx.stroke();

      // הוספת תוויות
      ctx.fillStyle = '#000';
      ctx.font = '16px Arial';
      ctx.fillText('Current Score', 160, canvas.height - currentScore);
      ctx.fillText(currentScore, 50, canvas.height - currentScore - 10);
      ctx.fillText('Pass Score', 160, canvas.height - passScore);
      ctx.fillText(passScore, 50, canvas.height - passScore -10);
    }
  

  }
}
