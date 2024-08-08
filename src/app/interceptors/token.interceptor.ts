

// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router'; // ייבוא של Router
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   constructor(private router: Router) {} // הוספת Router לקונסטרקטור

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = sessionStorage.getItem('authToken'); // השגת הטוקן מה-Session Storage

//     let authReq = req;
//     if (token) {
//       authReq = req.clone({
//         headers: req.headers.set('Authorization', `Bearer ${token}`)
//       });
//     }

//     return next.handle(authReq).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 401) {
//           // טיפול במקרה של טוקן פג תוקף
//           this.router.navigate(['/no-access']); // נתיב לדף חסימה
//         } else {
//           // טיפול בשגיאות אחרות אם יש צורך 
//           alert("קיימת בעיה אחרת - לא קשור להרשאות גישה"+error.status)
//           this.router.navigate(['/no-access']); // נתיב לדף חסימה
//         }
//         return throwError(error);
//       })
//     );
//   }
// }

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';// שירות לניהול טוקנים

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) {} // הוספת Router ו-AuthService לקונסטרקטור

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('authToken'); // השגת הטוקן מה-Session Storage

    let authReq = req;
    if (token) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        debugger
        if (error.status === 403) {
          // טיפול במקרה של טוקן פג תוקף
          return this.authService.refreshToken().pipe(
         switchMap((response: { token: string }) => {  // נניח שהתגובה היא אובייקט עם טוקן
  const newToken = response.token;  // קבלת הטוקן מתוך האובייקט
              alert("הטוקן החדש"+newToken)

              sessionStorage.setItem('authToken', newToken); // שמירת הטוקן החדש ב-Session Storage
              const clonedReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${newToken}`)
              });
              return next.handle(clonedReq);
            }),
            catchError(() => {
              // אם רענון הטוקן נכשל, נווט לעמוד שגיאה
              this.router.navigate(['/no-access']);
              return throwError('Unable to refresh token. Please login again.');
            })
          );
        } else {
          // טיפול בשגיאות אחרות
        alert("קיימת בעיה אחרת - לא קשור להרשאות גישה"+error.status)
          this.router.navigate(['/no-access']); // נתיב לדף חסימה במקרה של שגיאה אחרת
          return throwError(error);
        }
      })
    );
  }
  }
