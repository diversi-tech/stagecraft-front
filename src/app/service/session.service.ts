import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class sessionService {
  private baseUrl: string =`${environment.baseUrl}/login`


  constructor(private http: HttpClient) { }

  login(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  getActiveUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getactiveusers`);
  }
}
