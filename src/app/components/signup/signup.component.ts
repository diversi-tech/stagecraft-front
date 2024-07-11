import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), this.strongPasswordValidator]],
      email: ['', [Validators.required, Validators.email]]
    });
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
    }
  }
}
