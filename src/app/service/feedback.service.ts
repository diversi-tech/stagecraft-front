import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseUrl = 'http://your-api-url.com/api/feedback'; // שנה לכתובת ה-API שלך

  constructor(private http: HttpClient) {}

  uploadFeedback(userId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('userId', userId.toString());

    return this.http.post<any>(this.baseUrl, formData, {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data'
      })
    });
  }
}
