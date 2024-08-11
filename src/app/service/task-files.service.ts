import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskFileService {
  private baseUrl = `${environment.baseUrl}/Files/`; // שנה לכתובת ה-API שלך

  constructor(private http: HttpClient) {}

  getFilesByVideo(videoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/video/${videoId}`);
  }
}