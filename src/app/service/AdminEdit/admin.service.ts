import { Injectable } from '@angular/core';
//סרביס מובנה המכיל פונ' שיודעות לפנות לשרת
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { courses } from 'src/app/class/Admin';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //יש לקבל את הסרביס המובנה כהזרקה ואז הוא יהיה זמין לשימוש
  constructor(private http:HttpClient) { }

  //משתנה זה שומר את כתובת השרת הבסיסית
  URL = `${environment.baseUrl}/Admin/`
  GetAllAdminCourses():Observable<Array<courses>>
  {
    return this.http.get<Array<courses>>(this.URL+"GetAllAdminCourses");
  }
  
  AddAdminCourses(formData: FormData):Observable<Array<courses>>
  {
    debugger
    return this.http.post<Array<courses>>(this.URL + "AddAdminCourses", formData);
  }

  updateAdminCourses(id: any, formData: FormData): Observable<Array<courses>> {
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');

    return this.http.put<Array<courses>>(`${this.URL}UpdateAdminCourses/${id}`, formData );
  }

  DeleteAdminCourse(id:any):Observable<Array<courses>>
  {
    return this.http.delete<Array<courses>>(this.URL + "DeleteAdminCourse/" + id)
  }
}
