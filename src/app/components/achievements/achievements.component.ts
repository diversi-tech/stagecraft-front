import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { HttpClientModule } from '@angular/common/http'; // ודא שה-HttpClientModule מיובא
import { Observable } from 'rxjs';
import { course } from 'src/app/class/Course';
import { CourseAchievementsService } from 'src/app/service/course-achievements.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  courses: course[] = []; // מערך הקורסים
  selectedCourse: course | undefined; // הקורס הנבחר
  userId: number = 4; // מזהה המשתמש
  currentScore: any = 0; // הציון הנוכחי
  passScore: any = 0; // ציון עובר
  courseId:any;
  mycourse!:course;
  @ViewChild('myCanvas', { static: true }) myCanvas!: ElementRef<HTMLCanvasElement>; // התייחסות ל-Canvas

  constructor(private CourseAchievementsService: CourseAchievementsService) {}

  ngOnInit(): void {
    // שליפת כל הקורסים עבור המשתמש הנוכחי
    this.CourseAchievementsService.getAllCoursesForUser(this.userId).subscribe(data => {
      this.courses = data;
      alert("hvj")
       console.log('Received courses:', data); // הדפסת הנתונים לקונסול
    });
  }

  getCourseDetails(courseId: number): void {
    // שליפת פרטי הקורס הנבחר לפי מזהה הקורס
    alert(courseId)
   
    this.CourseAchievementsService.GetCourseById(courseId).subscribe( courseArray=> {
     // alert("zdxdfcgvhbj"+courseArray[0])
     debugger
       this.selectedCourse = courseArray; // קבלת האובייקט הראשון במערך
      //alert("zdxdfcgvhbj"+courseArray)
      

      // console.log('Type of selectedCourse:', typeof this.selectedCourse); // הדפסת סוג האובייקט לקונסול
      // console.log(this.selectedCourse); // הדפסת הנתונים לקונסול
      this.currentScore =this.selectedCourse.numberOfViewers; // הציון הנוכחי
       console.log(this.currentScore); // הדפסת הציון לקונסול
      this.passScore = 100; // הגדרת ציון עובר
      
      // console.log('price in selectedCourse', this.currentScore); // הדפסת השדה price לקונסול
      if (this.myCanvas && this.myCanvas.nativeElement) { // בדיקה אם ה-canvas קיים לפני קריאת הפונקציה
        this.drawChart(this.selectedCourse); // קריאה לפונקציה לציור הגרף
      }
    // טיפול בשגיאה
    });
  }

  drawChart(course: any): void {
    // console.log('course data in drawChart', JSON.stringify(course, null, 2)); // הדפסת הנתונים ב-JSON לקונסול
    // console.log('course price', course.price); // הדפסת השדה mark לקונסול
    const canvas = this.myCanvas.nativeElement;
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
  getAdjustedLabelPosition(score: number, offset: number): number {
    const adjustedPosition = score + offset;
    if (adjustedPosition < 0) {
      return 0;
    }
    if (adjustedPosition > 100) {
      return 100;
    }
    return adjustedPosition;
  }

  getAdjustedCurrentLabelPosition(score: number, offset: number): number {
    const adjustedPosition = score + offset;
    if (adjustedPosition < 5) { // בודק אם התגית קרובה מדי לקצה השמאלי
      return 5;
    }
    if (adjustedPosition > 95) { // בודק אם התגית קרובה מדי לקצה הימני
      return 95;
    }
    return adjustedPosition;
  }
}
