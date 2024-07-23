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
  isAnimating: boolean = false; // משתנה לניהול מצב האנימציה הנוכחית
  constructor(private courseAchievementsService: CourseAchievementsService) {} // הזרקת השירות של CourseAchievements

  ngOnInit(): void { // פונקציה המופעלת בעת אתחול הקומפוננטה
    // שליפת כל הקורסים עבור המשתמש הנוכחי
    this.courseAchievementsService.getAllCoursesForUser(this.userId).subscribe(data => {
      this.courses = data; // שמירת הקורסים במערך
    });
  }

  getCourseDetails(courseId: number): void { // פונקציה לשליפת פרטי הקורס הנבחר לפי מזהה הקורס
    this.animationActive = true; // הפעלת האנימציה
    this.isAnimating = true; // הגדרת מצב אנימציה לפעיל
    this.courseAchievementsService.GetCourseById(courseId).subscribe((course: course) => {
      this.selectedCourse = course; // שמירת הקורס הנבחר
      this.animationActive = true; // הפעלת האנימציה
      this.currentScore = this.selectedCourse.numberOfViewers; // הגדרת הציון הנוכחי
      this.passScore = 85; // הגדרת ציון עובר
      this.feedbacks = [];
      // קריאה לפונקציה לקבלת כל המשובים
      this.courseAchievementsService.getFeedbackByUserCourseClass(this.userId, this.selectedCourse.courses_id).subscribe(feedbacks => {
        this.feedbacks = feedbacks; // שמירת המשובים
      500});
                      });

   
  }

  getLabelStyle(score: number, isPassScore: boolean = false): { [key: string]: string } {
    const offset = 5; // מרחק מקצה הדף
    const maxPosition = 95; // מיקום מקסימלי כדי לא לגעת בקצה השני של הדף
    let position = score > maxPosition ? maxPosition : score;
    position = position < offset ? offset : position;
   
    return {
      'right': `${position}%`,
      'transform': position >= maxPosition ? 'translateX(60%)' : 'translateX(50%)', // הזזת התגית של הציון הנוכחי מעט שמאלה
      'opacity': this.isAnimating ? '0.5' : '1', // שינוי ה-opacity בהתאם למצב האנימציה
    };
  }
  
  
}
