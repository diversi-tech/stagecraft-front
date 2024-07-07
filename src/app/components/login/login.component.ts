// import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { users } from 'src/app/class/User';
// import { sessionService } from 'src/app/service/session.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   message: string | null = null;
//   emailForm: FormGroup;

//   constructor(private sessionService: sessionService) {
//     this.emailForm = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email])
//     });
//   }

//   login() {
//     if (this.emailForm.valid) {
//       this.sessionService.login(this.emailForm.value.email).subscribe(
//         response => {
//           this.message = 'Logged in successfully';
//         },
//         error => {
//           this.message = 'User already logged in.';
//         }
//       );
//     } else {
//       this.message = 'Please enter a valid email.';
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from 'src/app/class/User';
import { sessionService } from 'src/app/service/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string | null = null;
  emailForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ]))
  });

  userenter: users = new users(" ", " ");
  constructor(private fb: FormBuilder,private sessionService: sessionService) {

  }
  // login() {
  //   this.sessionService.login(emailForm:FormGroup).subscribe(
  //     response => {
  //       this.message = 'Logged in successfully';
  //     },
  //     error => {
  //       this.message = 'User already logged in.';
  //     }
  //   );
  // }

}

//  @Component({
//    selector: 'app-login',
//   template: `
//      <div>
//        <input [(ngModel)]="email" placeholder="Enter email">
//        <button (click)="login()">Login</button>
//        <button (click)="logout()">Logout</button>
//      </div>
//      <div *ngIf="message">{{ message }}</div>
//   `
//  })

//קוד TypeScript של ה-component שלך צריך להכיל פונקציות ליצירת ה־form control וה־validation:
