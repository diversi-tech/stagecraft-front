
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { users } from 'src/app/class/User';
import { UserService } from 'src/app/service/login.service'; // ניתן להניח שיש לך סרוויס כזה

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  user: users = {
    Email: '',
    password_has: ''
  };
  constructor(public userService: UserService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      password_has: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  checkUser(): void {
    if (this.userForm.valid) {
      this.userService.checkIfUserExists(this.userForm.value as users).subscribe(
        exists => {
          if (exists) {
            console.log('User exists');
          } else {
            console.log('User does not exist');
          }
        },
        error => {
          console.error('Error checking user:', error);
        }
      );
    }
    else {
      console.log('Form is invalid');
    }
  }

}



