import { Injectable } from '@angular/core';
//סרביס מובנה המכיל פונ' שיודעות לפנות לשרת
import { HttpClient } from '@angular/common/http';
 import { courses } from 'src/app/class/Admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //יש לקבל את הסרביס המובנה כהזרקה ואז הוא יהיה זמין לשימוש
  constructor(private http:HttpClient) { }

  //משתנה זה שומר את כתובת השרת הבסיסית
  URL = "http://localhost:5128/api/Admin/"
  GetAllAdminCourses():Observable<Array<courses>>
  {
    return this.http.get<Array<courses>>(this.URL+"GetAllAdminCourses");
  }
  
  AddAdminCourses(admin:courses):Observable<Array<courses>>
  {
    return this.http.post<Array<courses>>(this.URL + "AddAdminCourses", admin)
  }

  UpdateAdminCourses(id:any,admin:courses):Observable<Array<courses>>
  {
    debugger
    return this.http.put<Array<courses>>(this.URL + "UpdateAdminCourses/" + id, admin)
  }

  DeleteAdminCourse(id:any):Observable<Array<courses>>
  {
    return this.http.delete<Array<courses>>(this.URL + "DeleteAdminCourse/" + id)
  }
}
