import { Component } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cardNumber = '';
  expiryDate = '';
  cvv = '';
  amount = 0;

  constructor(private paymentService: PaymentService) { }

  onPay() {
    const paymentDetails = {
      cardNumber: this.cardNumber,
      expiryDate: this.expiryDate,
      cvv: this.cvv,
      amount: this.amount
    };

    this.paymentService.processPayment(paymentDetails).subscribe(
      response => {
        alert('Payment successful! Transaction ID: ' + response.transactionId);
      },
      error => {
        alert('Payment failed. ' + error.error.message);
      }
    );
  }
}
