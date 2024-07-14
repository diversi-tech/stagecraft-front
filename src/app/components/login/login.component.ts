
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/class/User';
import { UserService } from 'src/app/service/login.service'; // ניתן להניח שיש לך סרוויס כזה

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  
  user: users = new users("","")
  

  constructor(public userService: UserService, private formBuilder: FormBuilder,public router: Router ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  checkUser(): void {
    if (this.userForm.valid) {
      this.userService.checkIfUserExists(this.userForm.value as users).subscribe(
        exists => {
          if (exists==-1) {
            this.router.navigate(['/signup']);
           
          } else {
            debugger
            this.userService.currentUserId=exists
          // alert('User does not exist');
          this.router.navigate(['/myCourse']);
          }
        },
        error => {
          console.error('Error checking user:', error);
        }
      );
    }
    else {
      alert('Form is invalid');
    }
  }
    

}



