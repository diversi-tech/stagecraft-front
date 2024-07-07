import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { userCourse } from 'src/app/class/userCourse';




@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {

  userCourse!: userCourse;
  userId: number = 0;  // נניח שזהו ה-ID של המשתמש
  courseId: number = 0;

  // userId: number = 1;  // נניח שזהו ה-ID של המשתמש
  // courses: any[] = [];

  // constructor(private CourseService:CourseService) { }
constructor(private CourseService:CourseService){}
  ngOnInit(): void {
    this.CourseService.getCoursesForUser(this.userId).subscribe(data => {
      this.userCourse = data;
    });
  }
}
