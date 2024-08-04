import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { course } from 'src/app/class/Course';
import { userCourse } from 'src/app/class/userCourse';
import { adminService } from 'src/app/service/admin.service';
import { HomePageService } from 'src/app/service/home-page.service';

@Component({
  selector: 'app-admin-add-course-for-user',
  templateUrl: './admin-add-course-for-user.component.html',
  styleUrls: ['./admin-add-course-for-user.component.css']
})
export class AdminAddCourseForUserComponent {
 
myNumber:string="";
userName:string="";
userCode:number=0
userCoursesList$: Observable<course[]> = this.adminService.test$;
allCourses:Array<course>=new Array<course>();

filteredCours: Array<course> = new Array<course>();
  constructor(private route: ActivatedRoute,public adminService:adminService,public HomePageService:HomePageService) {
    this.myNumber = this.route.snapshot.params['code']
    this.userName = this.route.snapshot.params['name']
    this.userCode = parseInt(this.myNumber)
}
ngOnInit() {
this.adminService.GetAllCoursOfUser(this.userCode);
this.adminService.test$.subscribe(data=>{this.allCourses=data})
 this.HomePageService.getAvailableCourse().subscribe(data=>{this.HomePageService.listCourse=data
    this.userCoursesList$.subscribe(userCourses => {
      debugger
      this.filteredCours = data.filter(cours => {
          const isCourseOwned = userCourses.some(userCourse => userCourse.courses_id === cours.courses_id);
          debugger;
          console.log(this.userCoursesList$)
          ;
          
          return !isCourseOwned
      });
      
    });

  },error=>{error.message})
}
searchTerm: string = "";
onSearchTermChange() {
debugger
const searchValue = this.adminService.toUpperCaseIfEnglish(this.searchTerm);
    this.userCoursesList$.subscribe(userCourses => {
        this.filteredCours = this.HomePageService.listCourse.filter(cours => {
            const isCourseOwned = userCourses.some(userCourse => userCourse.courses_id === cours.courses_id);
            debugger;
            return !isCourseOwned &&
                (this.adminService.toUpperCaseIfEnglish(cours.courses_name).includes(searchValue) ||
                this.adminService.toUpperCaseIfEnglish(cours.courses_id.toString()).includes(searchValue));
        });
    })
}
succid:any;
userCours:userCourse = new userCourse(this.userCode,0);
addcours(coursId:number){
  // הוספת קורס למשתמש
  debugger
  this.userCours.userId=this.userCode;
  this.userCours.coursesId=coursId
  this.adminService.AddCoursToUser(this.userCours).subscribe(response => {this.succid=response},error=>{error.message});
  debugger
  this.adminService.GetAllCoursOfUser(this.userCode);}
delcours(coursId:number){
  // למחיקת קורס למשתמש
  debugger
  this.userCours.userId=this.userCode;
  this.userCours.coursesId=coursId
  this.adminService.DeletCoursToUser(this.userCours).subscribe(response => {this.succid=response},error=>{error.message});
  // this.adminService.GetAllCoursOfUser(this.userCode).subscribe(data=>{ this.userCoursesList=data},error=>{error.message})
  debugger
  this.adminService.GetAllCoursOfUser(this.userCode);
}


}
