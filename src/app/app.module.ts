import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserCoursesComponent } from './components/user-courses/user-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './components/course-list/course-list.component';
import { progressbarComponent } from './components/progressbar/progressbar.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TaskFilesComponent } from './components/task-files/task-files.component';
import { VideoTranscriptionComponent } from './components/video-transcription/video-transcription.component';
import { TranscriptionService } from './service/transcription.service';

// import { CourseService } from './service/course.service'; 
import { AdminCustomerApprovalComponent } from './components/admin-customer-approval/admin-customer-approval.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
//import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CourseListComponent,
    LoginComponent,
    UserCoursesComponent,
    progressbarComponent,
    FeedbackComponent,
    TaskFilesComponent,
    VideoTranscriptionComponent,
    AdminCustomerApprovalComponent,
    CourseOverviewComponent,
    LessonComponent,
    AchievementsComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //NgxChartsModule,//רכיב גרפי
    NgCircleProgressModule.forRoot({
      // הגדרות ברירת מחדל לרכיב המעגלי
      radius: 60,
      outerStrokeWidth: 510,
      innerStrokeWidth: 30,
      outerStrokeColor: "'#FFC0CB'",
      innerStrokeColor: "#e06133",
      animationDuration: 300
    })

     
  ],
  providers: [TranscriptionService],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }
