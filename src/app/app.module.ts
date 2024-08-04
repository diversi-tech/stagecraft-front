import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdminCoursForUserComponent } from './components/admin-cours-for-user/admin-cours-for-user.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
//import { ForumComponent } from './components/forum/forum.component';
//import { AdminForumComponent } from './components/admin-forum/admin-forum.component';
import { SignupComponent } from './components/signup/signup.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AdminAddCourseForUserComponent } from './components/admin-add-course-for-user/admin-add-course-for-user.component';
import { AdminSearchUserComponent } from './components/admin-search-user/admin-search-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AdminComponent } from './components/AdminEdit/admin.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; // כרטיס
import { MatProgressBarModule } from '@angular/material/progress-bar'; // סרגל התקדמות
import { CourseLessonsComponent } from './course-lessons/course-lessons.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

import { MatListModule } from '@angular/material/list'; // רשימה
import { MatDialogModule } from '@angular/material/dialog';
import { BuyCoursComponent } from './components/buy-cours/buy-cours.component';
import { PaymentComponent } from './components/payment/payment.component';
// import { PaymentComponent } from './components/payment/payment.component';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PaymentSuccessDialogComponent } from './components/payment-success-dialog/payment-success-dialog.component';

import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UploadingFileComponent } from './components/uploading-file/uploading-file.component';
import { UploadingVideoComponent } from './components/uploading-video/uploading-video.component';
import { VidioComponent } from './components/video/vidio.component';
import { MyAdminForumComponent } from './components/my-admin-forum/my-admin-forum.component';
import { MyForumComponent } from './components/my-forum/my-forum.component';



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
    AdminCoursForUserComponent,
    AchievementsComponent,
    SignupComponent,
    CourseDetailsComponent,
    AdminAddCourseForUserComponent,
    AdminSearchUserComponent,
    AdminComponent,
    CourseLessonsComponent,
    ErrorDialogComponent,
    BuyCoursComponent,
    PaymentComponent,
    PaymentSuccessDialogComponent,
    FileUploadComponent,
    UploadingFileComponent,
    UploadingVideoComponent,
    VidioComponent,
    MyForumComponent,
    MyAdminForumComponent
  
  
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    //NgxChartsModule,//רכיב גרפי
    NgCircleProgressModule.forRoot({
      // הגדרות ברירת מחדל לרכיב המעגלי
      radius: 60,
      outerStrokeWidth: 510,
      innerStrokeWidth: 30,
      outerStrokeColor: "'#FFC0CB'",
      innerStrokeColor: "#e06133",
      animationDuration: 300
    }),
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, // ייבוא מודול כרטיס
    MatProgressBarModule, // ייבוא מודול סרגל התקדמות
    MatListModule,
    MatFormFieldModule,  
       MatInputModule,
       
     
  ],
  providers: [TranscriptionService],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }
