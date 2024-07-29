import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http'; // ייבוא HttpClient
import { jsPDF } from 'jspdf'; // ייבוא jsPDF
import html2canvas from 'html2canvas'; // ייבוא html2canvas
import { PaymentSuccessDialogComponent } from '../payment-success-dialog/payment-success-dialog.component'; // ייבוא הרכיב לתצוגת הודעת הצלחה

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  @ViewChild('receiptContent', { static: false }) receiptContent!: ElementRef; // קישור לתוכן הקבלה
  showReceipt: boolean = false; // משתנה לניהול הצגת הקבלה
  showError: boolean = false; // משתנה לניהול הצגת הודעת שגיאה

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

  constructor(public dialog: MatDialog, private http: HttpClient) { } // ייבוא HttpClient לשימוש בבקשות HTTP

  // פונקציה להורדת הקבלה כ-PDF
  downloadReceipt() {
    const receiptElement = this.receiptContent.nativeElement;
    html2canvas(receiptElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('receipt.pdf');
    });
  }

  // פונקציה להחלפת הצגת הקבלה
  toggleReceipt() {
    this.showReceipt = !this.showReceipt;
  }

  // פונקציה לעדכון התצוגה המקדימה
  updatePreview() {
    // כאן אפשר להוסיף לוגיקה לעדכון התצוגה המקדימה
  }

  // פונקציה לאימות הטופס
  validateForm() {
    this.showError = this.fields.some(field => field.required && !field.value);
    if (!this.showError) {
      this.onPay();
    }
  }

  // פונקציה לביצוע התשלום
  onPay() {
    const paymentData: any = this.fields.reduce((acc: any, field) => {
      acc[field.label] = field.value;
      return acc;
    }, {});

    this.http.post('https://example.com/api/payment/processPayment', paymentData, { responseType: 'blob' })
      .subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'receipt.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, error => {
        console.error('Payment processing failed', error);
      });
  }
}
