import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { course } from '../class/Course';
@Injectable({
  providedIn: 'root'
})
export class CourseAchievementsService {


  private apiUrl = 'http://localhost:5128/api/Courses/'; // כתובת ה-API שלך

  constructor(private http: HttpClient) {}

  // getCoursesForUser(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/user`);
  // }
  // // getCourseDetails(courseId: number): Observable<any> {
  // //   debugger
  // //   return this.http.get<any>(`${this.apiUrl}/GetCourseById/${courseId}`);
  // // }
  getCourseDetails(courseId: number): Observable<any> {
    debugger;
    return this.http.get<any>(`${this.apiUrl}/GetCourseById/${courseId}`).pipe(
      map(response => {
        let courseDetails = response;
        // ניתן להוסיף כאן לוגיקה נוספת במידה ורוצים לעבד את התגובה
        console.log('User courses:', courseDetails); // הדפסה לקונסול לבדיקה

        return courseDetails;
  }))}
    // );
  // }

  getCoursesForUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
  
  getAllCoursesForUser(userId: number): Observable<any[]> {
    
    return this.http.get<any[]>(`${this.apiUrl}GetCoursesByUserId/${userId}`);
  }

  GetCourseById(courseId: number): Observable<course>{
   // console.log(`Calling API: ${this.apiUrl}GetCourseById/${courseId}`);
   return this.http.get<course>(`${this.apiUrl}GetCourseById/${courseId}`);

  }
}
