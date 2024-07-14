import { environment } from "src/environments/environment"
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { users } from 'src/app/class/User';
import { course } from "../class/Course";
import { userCourse } from "../class/userCourse";
@Injectable({
  providedIn: 'root'
})
export class adminService {
  private itemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  items$: Observable<any[]> = this.itemsSubject.asObservable();
  
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

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, BehaviorSubject, throwError } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { users } from 'src/app/class/User';
// import { course } from "../class/Course";
// import { userCourse } from "../class/userCourse";
// import { catchError, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminService {
//   private baseUrl: string = `${environment.baseUrl}/Admin`;

//   private userListSubject: BehaviorSubject<users[]> = new BehaviorSubject<users[]>([]);
//   public userList$: Observable<users[]> = this.userListSubject.asObservable();

//   constructor(private http: HttpClient) {
//     this.loadUsers(); // Automatically load users when service is initialized
//   }

//   private handleError(error: any) {
//     console.error('An error occurred:', error);
//     return throwError(error); // Return an observable error
//   }

//   private updateUsersList(users: users[]) {
//     this.userListSubject.next(users);
//   }

//   getUsers(): Observable<users[]> {
//     return this.http.get<users[]>(`${this.baseUrl}/GetAllUsers`).pipe(
//       catchError(err => this.handleError(err))
//     );
//   }

//   loadUsers() {
//     this.getUsers().subscribe(
//       users => {
//         this.updateUsersList(users);
//       },
//       err => {
//         console.error('Error loading users:', err);
//       }
//     );
//   }

//   GetAllCoursesOfUser(userId: number): Observable<course[]> {
//     return this.http.get<course[]>(`${this.baseUrl}/GetAllCoursesOfUser/${userId}`).pipe(
//       catchError(err => this.handleError(err))
//     );
//   }

//   AddCourseToUser(userCourse: userCourse): Observable<any> {
//     return this.http.post<any>(`${this.baseUrl}/AddCourseToUser`, userCourse).pipe(
//       tap(() => this.loadUsers()), // Refresh users after adding course
//       catchError(err => this.handleError(err))
//     );
//   }

//   DeleteCourseFromUser(userCourse: userCourse): Observable<any> {
//     return this.http.delete<any>(`${this.baseUrl}/DeleteCourseFromUser`, { body: userCourse }).pipe(
//       tap(() => this.loadUsers()), // Refresh users after deleting course
//       catchError(err => this.handleError(err))
//     );
//   }

//   saveUsers(users: users[]): Observable<any> {
//     return this.http.post<any>(`${this.baseUrl}`, users).pipe(
//       catchError(err => this.handleError(err))
//     );
//   }
// }


