import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseAchievementsService {


  private apiUrl = 'http://localhost:5128/api/courses'; // כתובת ה-API שלך

  constructor(private http: HttpClient) {}

  getCoursesForUser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user`);
  }
  getCourseDetails(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${courseId}`);
  }
  
}
