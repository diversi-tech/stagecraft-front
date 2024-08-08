import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
import { classes } from 'src/app/class/Classes';
import { CourseService } from 'src/app/service/course.service';
import { HomePageService } from 'src/app/service/home-page.service';
import { UserService } from 'src/app/service/login.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit  {

  userCourses: any[] = [];
  userId: number = this.userService.currentUser?.code??-1; // Replace with actual user ID

  constructor(
    public homePageService: HomePageService,
    private courseService: CourseService,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit() {
    debugger
    this.courseService.getCoursesForUser(this.userId).subscribe(
      (courses) => {
        this.userCourses = courses;
      },
      (error) => {
        console.error('Error fetching user courses:', error);
      }
    );

    if (this.homePageService.listCourse.length === 0) {
      this.homePageService.loudCourses();
    }

    if (this.homePageService.listClasses.length === 0) {
      this.homePageService.loudClasses();
    }
  }
navigateToCourse(courseId: number): void {
  debugger
  this.router.navigate(['/mewcourse', courseId]);
}

}

