import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:5128/api/courses/';  // עדכן את ה-URL ל-API שלך

  constructor(private http: HttpClient) { }

  getCoursesForUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
  
  getAllCoursesForUser(userId: number): Observable<any[]> {
    
    return this.http.get<any[]>(`${this.apiUrl}GetCoursesByUserId/${userId}`);
  }

  GetCourseById(courseId: number): Observable<any> {
   return this.http.get<any>(`${this.apiUrl}GetCourseById/${courseId}`);

  }
}


