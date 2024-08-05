// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { users } from '../class/User';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private baseUrl: string = `${environment.baseUrl}/login/`; // הזן את כתובת ה- API שלך כאן

//   constructor(private http: HttpClient) { }
//   currentUser: users=new users("","");

//   // currentUserId: number =-1

//   // checkUserExistence(username: users): Observable<boolean> {
//   //   return this.http.get<boolean>(`${this.apiUrl}/users/${username}/exists`);
//   // }

//   checkIfUserExists(user: users): Observable<number> {
//     this.currentUser.code=-1;
//     // const url = `${this.baseUrl}?email=${user.email}&password=${user.password}`;
//     return this.http.post<number>(`${this.baseUrl}CheckUserExistence`,user);
//   }
//   checkIfManager(){
//     debugger
//     if(this.currentUser.email=="m@gmail.com" && this.currentUser.name=="manager")
//       this.currentUser.isAdmin=true
//   }
//   GetUserById(userId:number):Observable<users> {
//     debugger
//     return this.http.get<users>(`${this.baseUrl}GetUserById/${userId}`)
  

// }

// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { users } from '../class/User';
import { environment } from 'src/environments/environment';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = `${environment.baseUrl}/login/`; 
  //token
  private tokenUrl: string = `${environment.baseUrl}/login/token`; // URL ליצירת טוקן חדש

  constructor(private http: HttpClient) { }
  currentUser: users = new users("","");

  checkIfUserExists(user: users): Observable<any> {
    this.currentUser.code = -1;
    return this.http.post<any>(`${this.baseUrl}CheckUserExistence`, user)
      .pipe(
        tap(response => {
          if (response && response.token) {
            sessionStorage.setItem('authToken', response.token); // שמירת הטוקן ב-Session Storage
          }
        }),
        catchError(this.handleError)
      );
  }
  checkIfManager() {
    if (this.currentUser.email == "m@gmail.com" && this.currentUser.name == "manager")
      this.currentUser.isAdmin = true;
  }

  GetUserById(userId: number): Observable<users> {
    return this.http.get<users>(`${this.baseUrl}GetUserById/${userId}`);
  }

  setUser(user: users) {
    this.currentUser = user;
  }

  //token

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}login`, { email, password })
      .pipe(
        tap(response => {
          if (response && response.token) {
            sessionStorage.setItem('authToken', response.token); // שמירת הטוקן ב-Session Storage
          }
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    sessionStorage.removeItem('authToken'); // הסרת הטוקן מ-Session Storage בעת התנתקות
  }
  // מטפלת בשגיאות HTTP. במקרה של שגיאת 401, מנסה לרענן את הטוקן ולשלוח שוב את הבקשה המקורית.
  private handleError(error: HttpErrorResponse) {
    debugger
    if (error.status === 401) {
      // אם קיבלנו שגיאת 401, ננסה ליצור טוקן חדש
      return this.refreshToken().pipe(
        switchMap(newToken => {
          sessionStorage.setItem('authToken', newToken.token);
          // נסה שוב את הבקשה המקורית עם הטוקן החדש
          return this.retryFailedRequest(error);
        }),
        catchError(err => {
          // אם לא הצלחנו לרענן טוקן, נבצע התנתקות
          this.logout();
          return throwError(err);
        })
      );
    } else {
      return throwError(error);
    }
  }

  // מבצעת בקשה ליצירת טוקן חדש.
  private refreshToken(): Observable<any> {
    const email = this.currentUser.email; // נניח ששמרת את ה-email
    const password = this.currentUser.password; // נניח ששמרת את ה-password

    return this.http.post<any>(this.tokenUrl, { email, password }).pipe(
      tap(response => {
        if (response && response.token) {
          sessionStorage.setItem('authToken', response.token); // שמירת הטוקן החדש ב-Session Storage
        }
      })
    );
  }
  // מבצעת את הבקשה המקורית מחדש עם הטוקן החדש.
  private retryFailedRequest(error: HttpErrorResponse): Observable<any> {
    const failedRequest = error.error; // נניח שהבקשה המקורית נשמרה כאן
    const authToken = sessionStorage.getItem('authToken');
    
    if (failedRequest && authToken) {
      return this.http.request(failedRequest.method, failedRequest.url, {
        headers: { Authorization: `Bearer ${authToken}` },
        body: failedRequest.body
      });
    } else {
      return throwError(error);
    }
  }
}

