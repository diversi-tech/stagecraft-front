import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:5000/api/payments';

  constructor(private http: HttpClient) { }

  processPayment(paymentDetails: any): Observable<any> {
    // שליחת פרטי האשראי ל-Tokenization
    return this.http.post(`${this.apiUrl}/generateToken`, paymentDetails).pipe(
      switchMap((tokenResponse: any) => {
        const paymentToken = {
          token: tokenResponse.token,
          amount: paymentDetails.amount
        };
        return this.http.post(`${this.apiUrl}/processPayment`, paymentToken);
      })
    );
  }
}
