import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent  implements OnInit {
  courseId: number=0;
  lessonId: number=0;
  videoUrl = 'path_to_video.mp4'; // Replace with actual video URL
  questionFileUrl = 'path_to_questions.pdf'; // Replace with actual file URL

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = +(this.route.snapshot.paramMap.get('courseId')!);
    this.lessonId = +(this.route.snapshot.paramMap.get('lessonId')!);
  }
}
