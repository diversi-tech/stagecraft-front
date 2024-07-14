import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
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
    if (this.signupForm.valid) {
      this.submitted = true;
      // כאן תוכל להוסיף את הקוד לשליחת הנתונים לשרת
      setTimeout(() => {
        this.router.navigate(['/']);  // ניתוב לקומפוננטת ה-Courses לאחר הצגת ההודעה
      }, 2000);  
    }
  }
  cancel(){
    this.router.navigate(['/courseList']);

  }
}
