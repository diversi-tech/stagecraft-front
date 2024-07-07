import { Component } from '@angular/core';
import { HomePageService } from 'src/app/service/home-page.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent {
  
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

  constructor(public homePageService: HomePageService) {}
  ngOnInit() {
    debugger
    if(this.homePageService.listCourse.length==0)
      this.homePageService.loudCourses();
    if(this.homePageService.listClasses.length==0)
      this.homePageService.loudClasses();
    
  }

  toggleCourse(courseId: number): void {
    debugger
    const course = this.homePageService.listCourse.find(c => c.courses_id === courseId);
    if (course) {
      course.expanded = !course.expanded;
    }
  }

  toggleLesson(courseId: number, lessonId: number ): void {
    
    // const lesson = course?.lessons.find(l => l.class_id === lessonId);
    
    const course =  this.homePageService.listCourse.find(c => c.courses_id === courseId);
    const lesson = this.homePageService.listClasses.find(l => l.class_id === lessonId);
    if (lesson) {
      lesson.expanded = !lesson.expanded;
    }
  
  }
  
}
