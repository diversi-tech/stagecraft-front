import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsRepositoryComponent } from './components/questions-repository/questions-repository.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerFeedbackComponent } from './components/manager-feedback/manager-feedback.component';

<<<<<<< HEAD
// import { CourseService } from './service/course.service'; 
import { AdminCustomerApprovalComponent } from './components/admin-customer-approval/admin-customer-approval.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { CommonModule } from '@angular/common';
=======
>>>>>>> 5756ca7181482737e48525b5e5c61408e9a795fd

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    MenuComponent,
    LoginComponent,
    QuestionsComponent,
    QuestionsRepositoryComponent,
    ManagerFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    CommonModule,

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

     
=======
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> 5756ca7181482737e48525b5e5c61408e9a795fd
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
