import { Component } from '@angular/core';
import { course } from 'src/app/class/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  listCourse:Array<course>=[]

  ngOnInit() {
    this.listCourse.push(new course(1,"קורס1",23,100,"המלצות",1.50,30,new Date(),new Date(),"תאור1",new Date()));
    this.listCourse.push(new course(2,"קורס2",23,200,"המלצות",2.50,20,new Date(),new Date(),"תאור2",new Date()));
    this.listCourse.push(new course(4,"קורס1",23,300,"המלצות",1.50,30,new Date(),new Date(),"תאור1",new Date()));
    this.listCourse.push(new course(5,"קורס2",23,400,"המלצות",2.50,20,new Date(),new Date(),"תאור2",new Date()));




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

    constructor() { }
}
