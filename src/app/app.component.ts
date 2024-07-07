import { Component } from '@angular/core';
import { userCourse } from './class/userCourse';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})


export class AppComponent {
  title = 'project';
  userCourse!: userCourse;// = new userCourse();
  userId: number = 0;  // נניח שזהו ה-ID של המשתמש
  courseId: number = 0;
}

