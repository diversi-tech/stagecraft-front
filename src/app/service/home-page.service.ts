// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class HomePageService {
//   private baseUrl: string = environment.baseUrl;

//   constructor(private http: HttpClient) { }

//   getHomePageData(): Observable<any> {
//     return this.http.get<any>(`${this.baseUrl}/homepage`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserDetails } from '../models/user-details'; // ניתן ליצור מודל נפרד עבור UserDetails

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
    private baseUrl: string = environment.baseUrl

 

  constructor(private http: HttpClient) { }

  getCourseDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAvailableCourse(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  signUp(userDetails: UserDetails): Observable<any> {
    return this.http.post(this.baseUrl, userDetails);
  }

  signUpForACourse(courseId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${courseId}`, null); // בדיקה לגבי השימוש בתוך ה-POST
  }
}

