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

// import { CourseService } from './service/course.service'; 
import { AdminCustomerApprovalComponent } from './components/admin-customer-approval/admin-customer-approval.component';

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
    AdminCustomerApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
  providers: [],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }
