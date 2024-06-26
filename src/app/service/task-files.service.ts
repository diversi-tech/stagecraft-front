import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskFileService {
  private baseUrl = 'http://your-api-url.com/api/task-files'; // שנה לכתובת ה-API שלך

  constructor(private http: HttpClient) {}

  getFilesByVideo(videoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/video/${videoId}`);
  }
}