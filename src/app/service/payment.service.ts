import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
   private baseUrl: string =`${environment.baseUrl}/login`

  constructor(private http: HttpClient) { }
  processPayment(paymentDetails: any): Observable<any> {
    const securePaymentDetails = {
      cardNumber: paymentDetails.cardNumber,
      expiryDate: paymentDetails.expiryDate,
      cvv: paymentDetails.cvv,
      amount: paymentDetails.amount
    };
  
    // מיד נשלח את הנתונים לשרת, בלי לשמור אותם בזיכרון
    return this.http.post(`${this.baseUrl}/processPayment`, securePaymentDetails);
  }
  
}
