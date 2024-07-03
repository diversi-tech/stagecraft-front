import { Component } from '@angular/core';
import { users } from 'src/app/class/User';
import { userService } from 'src/app/service/user .service';

@Component({
  selector: 'app-admin-cours-for-user',
  templateUrl: './admin-cours-for-user.component.html',
  styleUrls: ['./admin-cours-for-user.component.css']
})


export class AdminCoursForUserComponent {

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
  
  constructor(public userService: userService){}
  filteredUsers:Array<users>=new Array();
  searchTerm: string = "";
  ngOnInit(){
    debugger
    if(this.userService.userList.length == 0){
      this.userService.loadUsers();
}
}

onSearchTermChange() {

  const searchValue =this.toUpperCaseIfEnglish(this.searchTerm);
  this.filteredUsers = this.userService.userList.filter(user => {
    return (
    this.toUpperCaseIfEnglish( user.name).includes(searchValue) ||
    this.toUpperCaseIfEnglish(user.email).includes(searchValue) 
    );
  });


}}