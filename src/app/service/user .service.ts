import { environment } from "src/environments/environment"
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from 'src/app/class/User';
@Injectable({
  providedIn: 'root'
})
export class userService {
  constructor(private http: HttpClient) { }
  private baseUrl: string = `${environment.baseUrl}/Admin`
  userList: Array<users> = new Array<users>();
  // Get all users from the API
  getUsers(): Observable<Array<users>> {
    debugger
    return this.http.get<Array<users>>(`${this.baseUrl}/GetAllUsers`);
  }

  // Load all users from the API into the userList array
  loadUsers() {
    debugger
    this.getUsers().subscribe(users => { this.userList = users }, err => console.log(err));
  }

  saveUsers(users: users[]): Observable<any> {
    return this.http.post(`${this.baseUrl}`, users);
  }
  

}