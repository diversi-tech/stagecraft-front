import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  // courses = [
  //   { id: 1, title: 'Angular Course', description: 'Learn Angular from scratch', price: 2750 }
  //   // Add more courses as needed
  // ];

  constructor(private router: Router) {}

  viewCourse(courseId: number) {
    this.router.navigate(['/course', courseId]);
  }

}
