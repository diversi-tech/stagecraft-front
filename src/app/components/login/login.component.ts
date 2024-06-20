import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from 'src/app/class/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ]))
  });

  userenter: users = new users(" ", " ");
  constructor(private fb: FormBuilder) {

  }
  f1() {

  }

}
//קוד TypeScript של ה-component שלך צריך להכיל פונקציות ליצירת ה־form control וה־validation:
