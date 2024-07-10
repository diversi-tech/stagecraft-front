import { environment } from "src/environments/environment"
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from 'src/app/class/User';
import { course } from "../class/Course";
import { userCourse } from "../class/userCourse";
@Injectable({
  providedIn: 'root'
})
export class adminService {
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
    this.getUsers().subscribe(users => { this.userList = users }, err =>{console.log(err)} );
  }
  GetAllCoursOfUser(userId:number): Observable<Array<course>>{
  return this.http.get<Array<course>>(`${this.baseUrl}/GetAllCoursOfUser/${userId}`);
  }
  AddCoursToUser(userCours:userCourse):Observable<any>{
    debugger
    console.log(userCours);
    return this.http.post<any>(`${this.baseUrl}/AddCoursToUser`, userCours);
  }
  DeletCoursToUser(userCours:userCourse){
    debugger
    return this.http.delete(`${this.baseUrl}/DeletCoursToUser`,{body:userCours} );
  }
  saveUsers(users: users[]): Observable<any> {
    return this.http.post(`${this.baseUrl}`, users);
  }
}
