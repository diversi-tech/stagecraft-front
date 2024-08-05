import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/class/User';
import { adminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-search-user',
  templateUrl: './admin-search-user.component.html',
  styleUrls: ['./admin-search-user.component.css']
})
export class AdminSearchUserComponent {
    constructor(public adminService: adminService,public router: Router){}
    filteredUsers:Array<users>=new Array();
    searchTerm: string = "";
    ngOnInit() {
      debugger;
      if (this.adminService.userList.length === 0) {
          this.adminService.getUsers().subscribe(users => {
              this.filteredUsers = users;
              this.adminService.userList=users
          });
      } else {
          this.filteredUsers = this.adminService.userList;
      }
    }
  onSearchTermChange() {
  debugger
    const searchValue =this.adminService.toUpperCaseIfEnglish(this.searchTerm);
    this.filteredUsers = this.adminService.userList.filter((user: users) => {
      return (
        this.adminService.toUpperCaseIfEnglish(user?.name??"").includes(searchValue)  ||
      this.adminService.toUpperCaseIfEnglish(user.email).includes(searchValue)
      );
    });
  }
  navigateToDetails(user: users) {
    this.router.navigate(['/addCourse', user.code, user.name]);
  }
  }

