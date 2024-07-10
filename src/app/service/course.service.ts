import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl: string = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  GetUserProgress(userId: number, courseId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/?userId=${userId}&CourseId=${courseId}`);
  }

  getCoursesForUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Admin/GetAllCoursOfUser/${userId}`);
  }

}