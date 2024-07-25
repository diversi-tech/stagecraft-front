import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentSuccessDialogComponent } from '../payment-success-dialog/payment-success-dialog.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  showReceipt: boolean = false;
  showError: boolean = false;

  fields: Array<{ 
    label: string, 
    type: string, 
    value: string, 
    name: string, 
    required: boolean, 
    minlength?: string | number | null, 
    maxlength?: string | number | null, 
    pattern?: string, 
    invalid?: boolean, 
    error?: string, 
    placeholder?: string,
    showPlaceholder?: boolean,
    icon?: string 
  }> = [
    { label: 'Full Name', type: 'text', value: '', name: 'fullName', required: true, placeholder: 'Enter your full name', showPlaceholder: false, icon: 'person' },
    { label: 'Email', type: 'email', value: '', name: 'email', required: true, placeholder: 'Enter your email', showPlaceholder: false, icon: 'email' },
    { label: 'Phone Number', type: 'text', value: '', name: 'phoneNumber', required: true, placeholder: 'Enter your phone number', showPlaceholder: false, icon: 'phone' },
    { label: 'Address', type: 'text', value: '', name: 'address', required: true, placeholder: 'Enter your address', showPlaceholder: false, icon: 'home' },
    { label: 'City', type: 'text', value: '', name: 'city', required: true, placeholder: 'Enter your city', showPlaceholder: false, icon: 'location_city' },
    { label: 'Country', type: 'text', value: '', name: 'country', required: true, placeholder: 'Enter your country', showPlaceholder: false, icon: 'public' },
    { label: 'Postal Code', type: 'text', value: '', name: 'postalCode', required: true, placeholder: 'Enter your postal code', showPlaceholder: false, icon: 'markunread_mailbox' },
    { label: 'Card Number', type: 'text', value: '', name: 'cardNumber', required: true, placeholder: 'Enter your card number', minlength: 16, maxlength: 16, showPlaceholder: false, icon: 'credit_card' },
    { label: 'Expiry Date', type: 'text', value: '', name: 'expiryDate', required: true, placeholder: 'MM/YY', showPlaceholder: false, icon: 'event' },
    { label: 'CVV', type: 'text', value: '', name: 'cvv', required: true, placeholder: 'Enter your CVV', minlength: 3, maxlength: 3, showPlaceholder: false, icon: 'lock' },
    { label: 'Amount', type: 'text', value: '', name: 'amount', required: true, placeholder: 'Enter the amount', showPlaceholder: false, icon: 'attach_money' }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  onPay() {
    // פתיחת הדיאלוג לאחר תשלום מוצלח
    const dialogRef = this.dialog.open(PaymentSuccessDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.updateReceipt();
    });
  }

  updatePreview() {
    // עדכון התצוגה המקדימה
  }

  toggleReceipt() {
    this.showReceipt = !this.showReceipt;
  }

  updateReceipt() {
    this.fields.forEach(field => {
      field.showPlaceholder = false;
    });
    this.showReceipt = true;
  }

  validateForm() {
    if (!this.isFormValid()) {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 2000);
    } else {
      this.onPay();
    }
  }

  isFormValid(): boolean {
    return this.fields.every(field => !field.required || field.value.trim() !== '');
  }
}