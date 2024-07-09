import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { HttpClientModule } from '@angular/common/http'; // ודא שה-HttpClientModule מיובא
import { Observable } from 'rxjs';
import { course } from 'src/app/class/Course';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  courses: course[] = []; // מערך הקורסים
  selectedCourse: course = new course(0); // הקורס הנבחר
  userId: number = 4; // מזהה המשתמש
  currentScore: any = 0; // הציון הנוכחי
  passScore: any = 0; // ציון עובר

  @ViewChild('myCanvas', { static: true }) myCanvas!: ElementRef<HTMLCanvasElement>; // התייחסות ל-Canvas

  constructor(private CourseService: CourseService) {}

  ngOnInit(): void {
    // שליפת כל הקורסים עבור המשתמש הנוכחי
    this.CourseService.getAllCoursesForUser(this.userId).subscribe(data => {
      this.courses = data;
      // console.log('Received courses:', data); // הדפסת הנתונים לקונסול
    });
  }

  openCourseDetails(courseId: number): void {
    // שליפת פרטי הקורס הנבחר לפי מזהה הקורס
    this.CourseService.GetCourseById(courseId).subscribe(data => {
      this.selectedCourse = new course(data[0]); // המרת הנתונים לאובייקט מסוג course

      // console.log('Type of selectedCourse:', typeof this.selectedCourse); // הדפסת סוג האובייקט לקונסול
      // console.log(this.selectedCourse); // הדפסת הנתונים לקונסול
      this.currentScore = this.selectedCourse.numberOfViewers; // הציון הנוכחי
      // console.log(this.currentScore); // הדפסת הציון לקונסול
      this.passScore = 50; // הגדרת ציון עובר
      
      // console.log('price in selectedCourse', this.currentScore); // הדפסת השדה price לקונסול
      this.drawChart(this.selectedCourse); // קריאה לפונקציה לציור הגרף
    }, error => {
        console.error('Error fetching course details:', error); // טיפול בשגיאה
    });
  }

  drawChart(course: any): void {
    // console.log('course data in drawChart', JSON.stringify(course, null, 2)); // הדפסת הנתונים ב-JSON לקונסול
    // console.log('course price', course.price); // הדפסת השדה mark לקונסול
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Context not found!'); // טיפול בשגיאה אם לא נמצא הקשר לציור
      return;
    }

    // Clear previous chart
    ctx.clearRect(0, 0, canvas.width, canvas.height); // ניקוי הציור הקודם

    // ציור קו עבור currentScore
    ctx.beginPath();
    ctx.moveTo(50, canvas.height - this.currentScore);
    ctx.lineTo(150, canvas.height - this.passScore);
    ctx.strokeStyle = 'rgba(75, 192, 192, 1)';
    ctx.lineWidth = 5;
    ctx.stroke();

    // ציור קו עבור passScore
    ctx.beginPath();
    ctx.moveTo(50, canvas.height - this.passScore);
    ctx.lineTo(150, canvas.height - this.currentScore);
    ctx.strokeStyle = 'rgba(255, 99, 132, 1)';
    ctx.lineWidth = 5;
    ctx.stroke();

    // הוספת תוויות
    ctx.fillStyle = '#000';
    ctx.font = '16px Arial';
    ctx.fillText('Current Score', 160, canvas.height - this.currentScore);
    ctx.fillText(this.currentScore.toString(), 50, canvas.height - this.currentScore - 10);
    ctx.fillText('Pass Score', 160, canvas.height - this.passScore);
    ctx.fillText(this.passScore.toString(), 50, canvas.height - this.passScore - 10);
  }
}
//משוב מנהל מטבלה אחרת, איזו? בברור