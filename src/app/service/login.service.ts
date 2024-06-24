import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://your-api-url'; // הזן את כתובת ה- API שלך כאן

  constructor(private http: HttpClient) { }

  // פונקציה לבדיקת קיום משתמש לפי מייל וסיסמה
  checkUserExists(email: string, password: string): Observable<boolean> {

    return this.http.post<boolean>(`${this.apiUrl}/checkUser`, { email, password });
  }
}
