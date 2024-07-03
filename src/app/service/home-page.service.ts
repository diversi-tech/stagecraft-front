

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import  {users}  from '../class/User'; 
import { course } from '../class/Course';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
    private baseUrl: string =` ${environment.baseUrl}/HomePage`

 

  constructor(private http: HttpClient) { }
  listCourse:Array<course>=new Array<course>();
 
  getCourseDetails(id: number): Observable<any> {
    debugger;
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAvailableCourse(): Observable<Array<course>> {
    return this.http.get<Array<course>> (this.baseUrl+"/GetAllCourses");
  }
  loudCourses()
  { this.getAvailableCourse().subscribe(response => {
    this.listCourse=response}, error => {
      console.error('Failed to show data:', error);
    });}

  signUp(userDetails: users): Observable<any> {
    return this.http.post(this.baseUrl, userDetails);
  }

  signUpForACourse(courseId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${courseId}`, null); // בדיקה לגבי השימוש בתוך ה-POST
  }
}

