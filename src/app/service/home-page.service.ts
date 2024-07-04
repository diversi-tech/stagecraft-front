

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
<<<<<<< HEAD
import  {users}  from '../class/User'; 
import { course } from '../class/Course';
import { classes } from '../class/Classes';
=======
import { users } from '../class/User'; // ניתן ליצור מודל נפרד עבור UserDetails
>>>>>>> 5756ca7181482737e48525b5e5c61408e9a795fd

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
    private baseUrl: string = environment.baseUrl

 

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
  listCourse:Array<course>=new Array<course>();
  listClasses:Array<classes>=new Array<classes>();

 
=======

>>>>>>> 5756ca7181482737e48525b5e5c61408e9a795fd
  getCourseDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAvailableCourse(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
<<<<<<< HEAD

  GetAllClass(): Observable<Array<classes>> {
    return this.http.get<Array<classes>> (this.baseUrl+"/GetAllClass");
  }

  loudCourses()
  { this.getAvailableCourse().subscribe(response => {
    this.listCourse=response}, error => {
      console.error('Failed to show data:', error);
    });}
=======
>>>>>>> 5756ca7181482737e48525b5e5c61408e9a795fd

    loudClasses()
  { this.GetAllClass().subscribe(response => {
    this.listClasses=response}, error => {
      console.error('Failed to show data:', error);
    });}

  signUp(userDetails: users): Observable<any> {
    return this.http.post(this.baseUrl, userDetails);
  }

  signUpForACourse(courseId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${courseId}`, null); // בדיקה לגבי השימוש בתוך ה-POST
  }
}

