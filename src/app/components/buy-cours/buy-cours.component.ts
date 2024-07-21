import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseAchievementsService } from 'src/app/service/course-achievements.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-buy-cours',
  templateUrl: './buy-cours.component.html',
  styleUrls: ['./buy-cours.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter', [
        animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

// import { Component, OnInit } from '@angular/core';




export class BuyCoursComponent implements OnInit {
  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseAchievementsService
  ) { }

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
