import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';





@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {


  userId: number = 1;  // נניח שזהו ה-ID של המשתמש
  courses: any[] = [];

  // constructor(private CourseService:CourseService) { }
constructor(private CourseService:CourseService){}
  ngOnInit(): void {
    this.CourseService.getCoursesForUser(this.userId).subscribe(data => {
      this.courses = data;
    });
  }
}
