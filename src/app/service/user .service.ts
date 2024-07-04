import { environment } from "src/environments/environment.prod"
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from 'src/app/class/User';
@Injectable({
    providedIn: 'root'
  })
export class userService{
    constructor(private http: HttpClient) { }
    private baseUrl: string = `${environment.baseUrl}/Admin`
    getUsers(): Observable<users[]> {
        return this.http.get<users[]>(`${this.baseUrl}`);
      }
  
    
      saveUsers(users: users[]): Observable<any> {
        return this.http.post(`${this.baseUrl}`, users);
      }
      
      
}