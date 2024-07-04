import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://your-api-url'; // הזן את כתובת ה- API שלך כאן

  constructor(private http: HttpClient) { }

  // checkUserExistence(username: users): Observable<boolean> {
  //   return this.http.get<boolean>(`${this.apiUrl}/users/${username}/exists`);
  // }

  checkIfUserExists(user: users): Observable<boolean> {
    const url = `${this.apiUrl}?email=${user.Email}&password=${user.password_has}`;
    return this.http.get<boolean>(url);
  }


}



