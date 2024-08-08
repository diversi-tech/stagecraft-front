import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string;
  private baseUrl: string = `${environment.baseUrl}/login/refresh-token`; // הכתובת לבקשות רענון הטוקן


  constructor(private http: HttpClient) {
    // Simulate user role
    this.userRole = 'admin';  // This would typically come from an authentication provider
  }

  isUserAdmin(): boolean {
    return this.userRole === 'admin';
  }
  // refreshToken(): Observable<any> {
  //   alert("Refresh---------------")
  //   debugger
  //   const authToken = sessionStorage.getItem('authToken');
  //   return this.http.post<any>(this.baseUrl,{authToken}); // שליחת בקשה לרענון הטוקן
  // }

  refreshToken(): Observable<any> {
    alert("Refresh---------------");
    debugger;
    const authToken = sessionStorage.getItem('authToken');
    alert(`"${authToken}"`)
    return this.http.post<any>(`${this.baseUrl}`,`"${authToken}"`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
}


