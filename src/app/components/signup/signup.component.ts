import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';
import { Response } from 'express';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
// ייבוא השירות

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private signupService: SignupService,
  private dialog: MatDialog) { // הוסף את השירות לקונסטרקטור
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), this.strongPasswordValidator]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.signupForm.reset(); // ניקוי הטופס בעת טעינת הקומפוננטה
    localStorage.removeItem('signupForm'); // הסרת נתוני הטופס מאחסון מקומי
    sessionStorage.removeItem('signupForm'); // הסרת נתוני הטופס מאחסון סשן
  }

  strongPasswordValidator(control: AbstractControl) {
    const value = control.value;
    if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) {
      return { strongPassword: true };
    }
    return null;
  }


  onSubmit() {
    debugger
    if (this.signupForm.valid) {
      this.submitted = true;

      // קריאה לשירות ההרשמה
      this.signupService.registerUser(this.signupForm.value).subscribe(
        response => {
          console.log('User registered successfully:', response);
          this.router.navigate(['/']);  // ניתוב לקומפוננטת ה-Courses לאחר הצגת ההודעה
        },
        error => {
          
          this.openErrorDialog('מייל זה כבר קיים במערכת');
        }
      );
    }
  }

  openErrorDialog(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: { message }
    });
  }
  
  cancel() {
    this.router.navigate(['/courseList']);
  }
}
