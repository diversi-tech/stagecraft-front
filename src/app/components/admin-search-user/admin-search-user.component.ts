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

  
    isHebrew(text: string): boolean {
      // בודק אם כל התווים בטקסט הם אותיות עבריות
      const hebrewRegex = /^[\u0590-\u05FF]+$/;
      return hebrewRegex.test(text);
    }
    toUpperCaseIfEnglish(text: string): string {
      // אם השם באנגלית, להמיר לאותיות גדולות
      if (!this.isHebrew(text)) {
        return text.toUpperCase();
      }
      return text;
    }
    constructor(public adminService: adminService,public router: Router){}
    filteredUsers:Array<users>=new Array();
    searchTerm: string = "";
    ngOnInit(){
      debugger
      if(this.adminService.userList.length == 0){
        this.adminService.loadUsers();
  }
  }
  onSearchTermChange() {
  debugger
    const searchValue =this.toUpperCaseIfEnglish(this.searchTerm);
    this.filteredUsers = this.adminService.userList.filter(user => {
      return (
        this.toUpperCaseIfEnglish(user?.name??"").includes(searchValue)  ||
      this.toUpperCaseIfEnglish(user.email).includes(searchValue)
      );
    });
  }
  navigateToDetails(user: users) {
    this.router.navigate(['/addCourse', user.code, user.name]);
  }
  }

