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
  userId: number = this.userService.currentUserId; // Replace with actual user ID

  constructor(
    public homePageService: HomePageService,
    private courseService: CourseService,
    private router: Router,
    private userService: UserService

  ) {}

  ngOnInit() {
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

  toggleCourse(courseId: number): void {
    const course = this.userCourses.find(c => c.courses_id === courseId);
    if (course) {
      course.expanded = !course.expanded;
    }
  }

  toggleLesson(courseId: number, lessonId: number): void {
    const lesson = this.homePageService.listClasses.find(l => l.class_id === lessonId && l.courses_id === courseId);
    if (lesson) {
      lesson.expanded = !lesson.expanded;
    }
  }

  downloadAndNavigate(file: any) {
    this.router.navigate(['/task-files']);
  }

  UploadFilesForFeedback(feedback: any) {
    this.router.navigate(['/feedback']);
  }
}

