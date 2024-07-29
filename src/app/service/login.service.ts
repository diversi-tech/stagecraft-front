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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../class/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = `${environment.baseUrl}/login/`; 

  constructor(private http: HttpClient) { }
  currentUser: users = new users("","");

  checkIfUserExists(user: users): Observable<number> {
    debugger
    this.currentUser.code = -1;
    return this.http.post<number>(`${this.baseUrl}CheckUserExistence`, user);
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

}

