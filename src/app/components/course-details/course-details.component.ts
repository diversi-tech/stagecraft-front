import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseAchievementsService } from 'src/app/service/course-achievements.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseAchievementsService
  ) { }

  // ngOnInit(): void {
  //   const courseId = +this.route.snapshot.paramMap.get('id')!;
  //   debugger
  //   this.courseService.getCourseDetails(courseId).subscribe(course => {
  //     this.course = course;
  //   });
  // }

  ngOnInit(): void {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    console.log('courseId:', courseId);
    this.courseService.GetCourseById(courseId).subscribe(course => {
      this.course = course;
      console.log('course:', this.course);
    }, error => {
      console.error('Error fetching course details:', error);
    });
  }
}
