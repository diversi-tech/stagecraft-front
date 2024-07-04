import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseId: number=0;
  lessons = [
    { id: 1, title: 'Introduction to Angular' },
    { id: 2, title: 'Components and Templates' }
    // Add more lessons as needed
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = +(this.route.snapshot.paramMap.get('id')!);
  }
}
