import { Component } from '@angular/core';
import { users } from 'src/app/class/User';
import { userService } from 'src/app/service/user .service';

@Component({
  selector: 'app-admin-cours-for-user',
  templateUrl: './admin-cours-for-user.component.html',
  styleUrls: ['./admin-cours-for-user.component.css']
})
export class AdminCoursForUserComponent {
  constructor(public userService: userService){}
  ngOnInit(){
    debugger
    if(this.userService.userList.length == 0){
      this.userService.loadUsers();
  }
}
  // items: users[] =this.userService.userList ;
  // searchTerm: string = '';
  // userEmail:string[]=this.userService.userList.map(user => user.Email)

  // searchItems(): string[] {
  //   return this.userEmail.filter(item => item.toLowerCase().includes(this.searchTerm.toLowerCase()));
  // }
  
}