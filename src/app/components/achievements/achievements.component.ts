import { Component, OnInit } from '@angular/core'; // ייבוא רכיבים מאנגולר
import { Observable } from 'rxjs'; // ייבוא Observable מאנגולר
import { course } from 'src/app/class/Course'; // ייבוא מודל קורס
import { CourseAchievementsService } from 'src/app/service/course-achievements.service'; // ייבוא שירות הישגי קורס

@Component({
  selector: 'app-achievements', // שם הבוחר של הקומפוננטה
  templateUrl: './achievements.component.html', // קובץ ה-HTML של הקומפוננטה
  styleUrls: ['./achievements.component.css'] // קובץ ה-CSS של הקומפוננטה
})
export class AchievementsComponent implements OnInit { // הגדרת הקומפוננטה ומימוש ממשק OnInit
  courses: course[] = []; // מערך הקורסים
  selectedCourse: course | undefined; // הקורס הנבחר
  userId: number = 4; // מזהה המשתמש
  currentScore: number = 0; // הציון הנוכחי
  passScore: number = 100; // ציון עובר
  feedbacks: { class_id: number, feedback_text: string }[] = []; // רשימת הפידבקים
  displayedColumns: string[] = ['class_id', 'feedback_text']; // עמודות להצגה בטבלה
  animationActive: boolean = false; // משתנה לניהול מצב האנימציה
  animationTimeout?: any; // משתנה לניהול זמן האנימציה
  constructor(private courseAchievementsService: CourseAchievementsService) {} // הזרקת השירות של CourseAchievements

  ngOnInit(): void { // פונקציה המופעלת בעת אתחול הקומפוננטה
    // שליפת כל הקורסים עבור המשתמש הנוכחי
    this.courseAchievementsService.getAllCoursesForUser(this.userId).subscribe(data => {
      this.courses = data; // שמירת הקורסים במערך
    });
  }

  getCourseDetails(courseId: number): void { // פונקציה לשליפת פרטי הקורס הנבחר לפי מזהה הקורס

    this.courseAchievementsService.GetCourseById(courseId).subscribe((course: course) => {
      this.selectedCourse = course; // שמירת הקורס הנבחר
      this.animationActive = true; // הפעלת האנימציה
      this.stopAnimation(); 
      this.currentScore = this.selectedCourse.numberOfViewers; // הגדרת הציון הנוכחי
      this.passScore = 85; // הגדרת ציון עובר
  
      this.feedbacks = [];
      // קריאה לפונקציה לקבלת כל המשובים
      this.courseAchievementsService.getFeedbackByUserCourseClass(this.userId, this.selectedCourse.courses_id).subscribe(feedbacks => {
        this.feedbacks = feedbacks; // שמירת המשובים
    
      500});
                      });

                
  }
   stopAnimation(): void {

      clearTimeout(this.animationTimeout); // ניקוי טיימר קיים
    
    this.animationTimeout = setTimeout(() => {
      this.animationActive = false; // הסרת האנימציה לאחר שניה
    },500); // 1000ms שווה לשניה
  }
  getLabelStyle(score: number, isPassScore: boolean = false): { [key: string]: string } {
    const offset = 5;
    const maxPosition = 95;
    let position = score > maxPosition ? maxPosition : score;
    position = position < offset ? offset : position;

    return {
      'right': `${position}%`,
      'transform': position >= maxPosition ? 'translateX(60%)' : 'translateX(50%)',
      'opacity': this.animationActive ? '0.5' : '1',
    };
  }
  
  
}
