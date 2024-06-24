import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { users } from 'src/app/class/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:users=new users();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    // if (this.loginForm.valid) {
    //   const email = this.loginForm.value.email;
    //   const password = this.loginForm.value.password_hash;
      
    //   // Here you can hash the password before sending it to the API
    //   // Example: const hashedPassword = this.hashPassword(password);

    //   // Send email and password to API
    //   // Example: this.authService.login(email, hashedPassword);
    // } else {
    //   // Handle form validation errors
    //   // You can display error messages or take other actions here
    // }
  }

  // Function to hash the password using a client-side hashing library
  // You can implement this function using a suitable hashing algorithm
  // hashPassword(password: string): string {
  //   // Implement password hashing logic here
  // }
}




// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { users } from 'src/app/class/User';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent implements OnInit{
// form:FormGroup=new FormGroup({
//   email: new FormControl(''),
//   password: new FormControl('')
// });
// submitted = false;

//   // email!: string;
//   // password!: string;
//   // loginForm: FormGroup;

//   // email = new FormControl ('', [Validators.required, Validators.email]);
//   //     password = new FormControl ('', Validators.required)

//   constructor(private formBuilder: FormBuilder) {}
//     ngOnInit(): void{
//       this.form=this.formBuilder.group(
//         {
//           email: ['', [Validators.required, Validators.email]],
//           password: [
//             '',
//             [
//               Validators.required,
//               Validators.minLength(6),
//               Validators.maxLength(40)
//             ]]
//         },
//         // {
//         //   validators: [Validation.match('password')]
//         // }
//       );
//     }

//     onSubmit(){
//       alert("ufdr")
//     }
    
//     // this.loginForm = this.formBuilder.group({
//     //   email: ['', [Validators.required, Validators.email]],
//     //   password: ['', Validators.required]
//     // });
//   }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //   //   // כאן ניתן להוסיף את הלוגיקה לביצוע התחברות
  //   //   console.log('Logged in with:', this.email, this.password);
  //   console.log('Logged in with:', this.loginForm.value);
  //   //   // לדוגמה: קריאה לשירות התחברות
  //   // }
  // }





//  export class LoginComponent implements OnInit{
//     // form!: FormGroup;
//     emailPasswordForm:users=new users();

//     constructor(private formBuilder: FormBuilder) { }
  
//     ngOnInit(): void {
//       // this.form = this.formBuilder.group({
//       //   email: ['', [Validators.required, Validators.email]],
//       //   password_hash: ['', [Validators.required, Validators.minLength(8)]]
//       // });
//     }
  
//     onSubmit() {
//       // if (this.form.valid) {
//       //   console.log('Form submitted successfully!');
//       //   console.log('Email:', this.form.value.email);
//       //   console.log('password_hash:', this.form.value.password_hash);
//       //   // כאן אפשר להוסיף פעולות נוספות כמו שמירה בשרת או עיבוד נוסף
//       // } else {
//       //   console.log('Form is invalid. Please fix the errors.');
//       // }
//     }
//   }
  


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { users } from 'src/app/class/User';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent implements OnInit {
//   // emailPasswordForm!: FormGroup;
//   emailPasswordForm:users=new users();


//   constructor(private fb: FormBuilder) { }
//   ngOnInit(): void {
//     this.emailPasswordForm.Email = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(8)]]
//     });
//   }


  // ngOnInit(): void {
  //   this.emailPasswordForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(8)]]
  //   });
  // }

//   onSubmit() {
//     if (this.emailPasswordForm.valid) {
//       // כאן תוכל להוסיף פעולות כגון שמירה בשרת
//       console.log('Form submitted successfully!');
//       console.log('Email:', this.emailPasswordForm.value.email);
//       console.log('Password:', this.emailPasswordForm.value.password);
//     } else {
//       console.log('Form is invalid. Please fix the errors.');
//     }
//   }
// }
