// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HomePageService } from 'src/app/service/home-page.service';

// @Component({
//   selector: 'app-course-lessons',
//   templateUrl: './course-lessons.component.html',
//   styleUrls: ['./course-lessons.component.css']
// })
// export class CourseLessonsComponent implements OnInit {
//   courseId: number=0;
//   lessons: any[] = [];

//   constructor(
//     private route: ActivatedRoute,
//     private homePageService: HomePageService
//   ) {}

//   ngOnInit() {
//     this.courseId = +this.route.snapshot.paramMap.get('id')!;
//     this.lessons = this.homePageService.listClasses.filter(lesson => lesson.courses_id === this.courseId);
//   }

//   downloadAndNavigate(file: any) {
//     // this.router.navigate(['/task-files']);
//   }

//   UploadFilesForFeedback(feedback: any) {
//     // this.router.navigate(['/feedback']);
//   }
//   toggleLesson(lessonId: number): void {
//     const lesson = this.lessons.find(l => l.class_id === lessonId);
//     if (lesson) {
//       lesson.expanded = !lesson.expanded;
//     }}
// }


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HomePageService } from 'src/app/service/home-page.service';

// @Component({
//   selector: 'app-course-lessons',
//   templateUrl: './course-lessons.component.html',
//   styleUrls: ['./course-lessons.component.css']
// })
// export class CourseLessonsComponent implements OnInit {
//   courseId: number=0;
//   lessons: any[] = [];
//   selectedVideoUrl: string="";

//   constructor(
//     private route: ActivatedRoute,
//     private homePageService: HomePageService
//   ) {}

//   ngOnInit() {
//     this.courseId = +this.route.snapshot.paramMap.get('id')!;
//     this.lessons = this.homePageService.listClasses.filter(lesson => lesson.courses_id === this.courseId);
//   }

//   toggleLesson(lessonId: number): void {
//     const lesson = this.lessons.find(l => l.class_id === lessonId);
//     if (lesson) {
//       lesson.expanded = !lesson.expanded;
//     }
//   }

//   selectVideo(videoUrl: string): void {
//     this.selectedVideoUrl = videoUrl;
//   }

//   downloadAndNavigate(file: any) {
//     // Logic for downloading the file and navigating
//   }

//   UploadFilesForFeedback(feedback: any) {
//     // Logic for uploading files for feedback
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HomePageService } from 'src/app/service/home-page.service';
// import { trigger, state, style, transition, animate } from '@angular/animations';

// @Component({
//   selector: 'app-course-lessons',
//   templateUrl: './course-lessons.component.html',
//   styleUrls: ['./course-lessons.component.css'],
//   animations: [
//     trigger('expandCollapse', [
//       state('collapsed', style({
//         height: '0px',
//         overflow: 'hidden',
//         opacity: 0
//       })),
//       state('expanded', style({
//         height: '*',
//         opacity: 1
//       })),
//       transition('collapsed <=> expanded', [
//         animate('300ms ease-in-out')
//       ])
//     ])
//   ]
// })
// export class CourseLessonsComponent implements OnInit {
//   courseId: number = 0;
//   lessons: any[] = [];
//   selectedVideoUrl: string = '';

//   constructor(
//     private route: ActivatedRoute,
//     private homePageService: HomePageService
//   ) {}

//   ngOnInit() {
//     this.courseId = +this.route.snapshot.paramMap.get('id')!;
//     this.lessons = this.homePageService.listClasses.filter(lesson => lesson.courses_id === this.courseId);
//     // Initialize each lesson with a collapsed state
//     this.lessons.forEach(lesson => lesson.expanded = 'collapsed');
//   }

//   toggleLesson(lessonId: number): void {
//     const lesson = this.lessons.find(l => l.class_id === lessonId);
//     if (lesson) {
//       lesson.expanded = lesson.expanded === 'expanded' ? 'collapsed' : 'expanded';
//     }
//   }

//   selectVideo(videoUrl: string): void {
//     this.selectedVideoUrl = videoUrl;
//   }

//   downloadAndNavigate(file: any) {
//     // Logic for downloading the file and navigating
//   }

//   UploadFilesForFeedback(feedback: any) {
//     // Logic for uploading files for feedback
//   }
// }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomePageService } from 'src/app/service/home-page.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-lessons',
  templateUrl: './course-lessons.component.html',
  styleUrls: ['./course-lessons.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        
        
height: '0px',
        overflow: 'hidden',
        opacity: 0
      })),
      state('expanded', style({
        
        
height: '*',
        opacity: 1
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class CourseLessonsComponent implements OnInit {
  courseId: number = 0;
  
 
courseName: string = '';
  lessons: any[] = [];
  selectedVideoUrl: string = '';
  selectedLessonIndex: number = -1;
  
selectedLessonTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private homePageService: HomePageService,
    private router: Router

  ) {}

  ngOnInit() {
    
 
this.courseId = +this.route.snapshot.paramMap.get('id')!;
    const course = this.homePageService.listCourse.find(c => c.courses_id === this.courseId);
    if (course) {
      this.courseName = course.courses_name;
    }
    this.lessons = this.homePageService.listClasses.filter(lesson => lesson.courses_id === this.courseId);
    this.lessons.forEach(lesson => lesson.expanded = 'collapsed');
  }

  toggleLesson(lessonId: number): void {
    const lesson = this.lessons.find(l => l.class_id === lessonId);
    if (lesson) {
      lesson.expanded = lesson.expanded === 'expanded' ? 'collapsed' : 'expanded';
    }
  }

  selectVideo(videoUrl: string, index: number, lessonTitle: string): void {
    this.selectedVideoUrl = videoUrl;
    this.selectedLessonIndex = index;
    this.selectedLessonTitle = lessonTitle;
  }

  downloadAndNavigate(file: any) {
    this.router.navigate(['/task-files']);
  }
  

  UploadFilesForFeedback(feedback: any) {
    this.router.navigate(['/feedback']);
  }


}
