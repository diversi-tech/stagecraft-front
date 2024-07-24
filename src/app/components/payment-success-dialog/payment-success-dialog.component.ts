import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-success-dialog',
  templateUrl: './payment-success-dialog.component.html',
  styleUrls: ['./payment-success-dialog.component.css']
})
export class PaymentSuccessDialogComponent {
  constructor(public dialogRef: MatDialogRef<PaymentSuccessDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
