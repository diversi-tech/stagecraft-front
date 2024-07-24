import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { course } from '../class/Course';
import { Feedback } from '../class/Feedback';
@Injectable({
  providedIn: 'root'
})
export class CourseAchievementsService {


  private apiUrl = 'http://localhost:5128/api/'; // כתובת ה-API שלך

  constructor(private http: HttpClient) {}

  // getCoursesForUser(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/user`);
  // }
  // // getCourseDetails(courseId: number): Observable<any> {
  // //   debugger
  // //   return this.http.get<any>(`${this.apiUrl}/GetCourseById/${courseId}`);
  // // }
//   getCourseDetails(courseId: number): Observable<any> {
//     debugger;
// <<<<<<< HEAD
//     return this.http.get<any>(`${this.apiUrl}Courses/GetCourseById/${courseId}`).pipe(
// =======
//     return this.http.get<any>(`${this.apiUrl}GetCourseById/${courseId}`).pipe(
// >>>>>>> 4f4c3d8efc7b773ede685b5bc684f344c0c63314
//       map(response => {
//         let courseDetails = response;
//         // ניתן להוסיף כאן לוגיקה נוספת במידה ורוצים לעבד את התגובה
//         console.log('User courses:', courseDetails); // הדפסה לקונסול לבדיקה

//         return courseDetails;
//   }))}
    // );
  // }

  getCoursesForUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}user/${userId}`);
  }
  
  getAllCoursesForUser(userId: number): Observable<any[]> {
    
    return this.http.get<any[]>(`${this.apiUrl}Admin/GetAllCoursOfUser/${userId}`);
  }

  GetCourseById(courseId: number): Observable<course>{
    
   // console.log(`Calling API: ${this.apiUrl}GetCourseById/${courseId}`);
   return this.http.get<course>(`${this.apiUrl}Courses/GetCourseById/${courseId}`);

  }

// הפונקציה החדשה לשליפת המשוב
getFeedbackByUserCourseClass(userId: number, courseId: number): Observable<Feedback[]> {
  return this.http.get<Feedback[]>(`${this.apiUrl}Feedback/GetFeedbackByUserCourseClass/${userId}/${courseId}`);
}

}
