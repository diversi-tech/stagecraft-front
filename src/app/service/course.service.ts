import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { classes } from '../class/Classes';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'https://api.example.com/courses';  // עדכן את ה-URL ל-API שלך

  constructor(private http: HttpClient) { }

  getCoursesForUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

}
