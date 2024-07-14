import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
import { classes } from 'src/app/class/Classes';
import { CourseService } from 'src/app/service/course.service';
import { HomePageService } from 'src/app/service/home-page.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit  {
  
  // courses = [
  //   {
  //     id: 1, 
  //     name: 'Course 1',
  //     expanded: false,
  //     lessons: [
  //       { id: 1, name: 'Lesson 1', details: 'Introduction to basics', expanded: false },
  //       { id: 2, name: 'Lesson 2', details: 'Advanced concepts', expanded: false },
  //       { id: 3, name: 'Lesson 3', details: 'Advanced concepts', expanded: false },
  //       { id: 4, name: 'Lesson 4', details: 'Advanced concepts', expanded: false }

  //     ]
  //   },
  //   {
  //     id: 2, 
  //     name: 'Course 2',
  //     expanded: false,
  //     lessons: [
  //       { id: 1, name: 'Lesson 1', details: 'Getting started', expanded: false },
  //       { id: 2, name: 'Lesson 2', details: 'Deep dive', expanded: false }
  //     ]
  //   },
  //   {
  //     id: 3, 
  //     name: 'Course 3',
  //     expanded: false,
  //     lessons: [
  //       { id: 1, name: 'Lesson 1', details: 'Introduction to basics', expanded: false },
  //       { id: 2, name: 'Lesson 2', details: 'Advanced concepts', expanded: false },
  //       { id: 3, name: 'Lesson 3', details: 'Advanced concepts', expanded: false },
  //       { id: 4, name: 'Lesson 4', details: 'Advanced concepts', expanded: false }

  //     ]
  //   },
  // ];

  // toggleCourse(courseId: number) {
  //   const course = this.courses.find(c => c.id === courseId);
  //   if (course) {
  //     course.expanded = !course.expanded;
  //   }
  // }

  // toggleLesson(courseId: number, lessonId: number) {
  //   const course = this.courses.find(c => c.id === courseId);
  //   if (course) {
  //     const lesson = course.lessons.find(l => l.id === lessonId);
  //     if (lesson) {
  //       lesson.expanded = !lesson.expanded;
  //     }
  //   }
  // }

  // courses: course[] = [];

  userCourses: any[] = [];
  userId: number = 1; // Replace with actual user ID

  constructor(
    public homePageService: HomePageService,
    private courseService: CourseService,
    private router: Router
  ) {}

  // ngOnInit() {
  //   debugger
  //   this.courseService.getCoursesForUser(this.userId).subscribe(
  //     (courses) => {
  //       this.userCourses = courses;
  //     },
  //     (error) => {
  //     }
  //   );

  //   if (this.homePageService.listCourse.length == 0)
  //     this.homePageService.loudCourses();

  //   if (this.homePageService.listClasses.length == 0)
  //     this.homePageService.loudCourses();

  //   console.log('User courses:', this.userCourses); // הדפסה לקונסול לבדיקה

  // }

  // ngOnInit() {
  //   this.courseService.getCoursesForUser(this.userId).subscribe(
  //     (courses) => {
  //       this.userCourses = courses;
  //     },
  //     (error) => {
  //       console.error('Error fetching user courses:', error);
  //     }
  //   );

  //   if (this.homePageService.listCourse.length === 0) {
  //     this.homePageService.loudCourses();
  //   }

  //   if (this.homePageService.listClasses.length === 0) {
  //     this.homePageService.loudCourses();
  //   }
  // }

  // toggleCourse(courseId: number): void {
  //   const course = this.userCourses.find(c => c.courses_id === courseId);
  //   if (course) {
  //     course.expanded = !course.expanded;
  //   }
  // }

  // toggleLesson(courseId: number, lessonId: number): void {
  //   const course = this.userCourses.find(c => c.courses_id === courseId);
  //   if (course) {
  //   const lesson = this.homePageService.listClasses.find(l => l.class_id === lessonId);
  //   if (lesson) {
  //     lesson.expanded = !lesson.expanded;
  //   }
  //   }
  // }

  // toggleCourse(courseId: number): void {
  //   const course = this.userCourses.find(c => c.courses_id === courseId);
  //   if (course) {
  //     course.expanded = !course.expanded;
  //   }
  // }

  // toggleLesson(courseId: number, lessonId: number): void {
  //   const course = this.userCourses.find(c => c.courses_id === courseId);
  //   if (course) {
  //     const lesson =this.homePageService.listClasses.find(l=> l.class_id === lessonId);
  //     if (lesson) {
  //       lesson.expanded = !lesson.expanded;
  //     }
  //   }
  // }

  // downloadAndNavigate(file: any) {
  //   this.router.navigate(['/task-files']);
  // }

  // UploadFilesForFeedback(feedback: any) {
  //   this.router.navigate(['/feedback']);
  // }

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

