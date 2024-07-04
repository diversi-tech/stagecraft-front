import { Component } from '@angular/core';
import { course } from 'src/app/class/Course';
import { HomePageService } from 'src/app/service/home-page.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  constructor(public homePageService:HomePageService) { }

  ngOnInit() {
    
  if(this.homePageService.listCourse.length==0)
    this.homePageService.loudCourses();
  if(this.homePageService.listClasses.length==0)
    this.homePageService.loudClasses();
  
}

  // courses = [

  //  { courseCode:1//קוד קורס
  //        ,courseName:"קורס1"//שם קורס
  //        ,NumberOfEpisodes:23//כמות פרקים
  //        ,price:100//מחיר
  //        ,recommendations:"ממליצה מאוד" //המלצות
  //        ,length:1.54//אורך
  //        ,numberOfViewers:30//כמות צופים
  //        ,productionDate:new Date()//תאריך יצירה
  //        ,lastEntry:new Date()//כניסה אחרונה
  //        ,CourseDescription:"תאור1"//תאור קורס
  //        ,lastModifiedDate:Date()},
  // { courseCode:2//קוד קורס
  //         ,courseName:"קורס2"//שם קורס
  //         ,NumberOfEpisodes:23//כמות פרקים
  //         ,price:200//מחיר
  //         ,recommendations:"ממליצה " //המלצות
  //         ,length:2.54//אורך
  //         ,numberOfViewers:20//כמות צופים
  //         ,productionDate:new Date()//תאריך יצירה
  //         ,lastEntry:new Date()//כניסה אחרונה
  //         ,CourseDescription:"תאור2"//תאור קורס
  //         ,lastModifiedDate:new Date()}
    
  //   ];

    
}  
