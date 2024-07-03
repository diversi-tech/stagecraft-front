import { Component, OnInit } from '@angular/core';
import { userCourse } from 'src/app/class/userCourse';
import { CourseService } from 'src/app/service/course.service';





@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {

  userCourse!: userCourse;
  userId: number = 0;  // נניח שזהו ה-ID של המשתמש
  courseId: number = 0;

  // constructor(private CourseService:CourseService) { }
constructor(private CourseService:CourseService){}
  ngOnInit(): void {
    this.CourseService.getCoursesForUser(this.userId).subscribe(data => {
      this.userCourse = data;
    });
  }
}
