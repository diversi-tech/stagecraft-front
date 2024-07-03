import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/service/user .service';
import { users } from 'src/app/class/User';


@Component({
  selector: 'app-admin-customer-approval',
  templateUrl: './admin-customer-approval.component.html',
  styleUrls: ['./admin-customer-approval.component.css']
})
export class AdminCustomerApprovalComponent {
  users: users[] = [];

  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=> {
      this.users = users;
    });
  }
  saveChanges(): void {
    this.userService.saveUsers(this.users).subscribe(response => {
      console.log('Changes saved successfully.');
    }, error => {
      console.error('Failed to save changes:', error);
    });
  }
  
}




