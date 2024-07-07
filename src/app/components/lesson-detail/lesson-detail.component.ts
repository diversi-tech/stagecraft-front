import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  lessonId: number=0;
  videoUrl: string="";
  questionsFileUrl: string="";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.lessonId = +(this.route.snapshot.paramMap.get('id')!);
    // Set videoUrl and questionsFileUrl based on lessonId
    this.videoUrl = 'path/to/video.mp4';
    this.questionsFileUrl = 'path/to/questions.pdf';
  }
}
