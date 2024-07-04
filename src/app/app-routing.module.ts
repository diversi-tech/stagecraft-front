import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { progressbarComponent } from './components/progressbar/progressbar.component';
import { TaskFilesComponent } from './components/task-files/task-files.component';
import { UserCoursesComponent } from './components/user-courses/user-courses.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LessonDetailComponent } from './components/lesson-detail/lesson-detail.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';

const routes: Routes = [
  // {path:"myHome-שם שבחרתי",component:HomeComponentשם המחלקה של הקומפוננטה}
{path:"login",component:LoginComponent},
{path:"courseList",component:CourseListComponent},
{path:"feedback",component:FeedbackComponent},
{path:"progressBar",component:progressbarComponent},
{path:"taskFiles",component:TaskFilesComponent},
{path:"userCourses",component:UserCoursesComponent},
{ path: 'course/:id', component: CourseOverviewComponent },
{ path: 'course/:courseId/lesson/:lessonId', component: LessonComponent },
{ path: '', component: CoursesComponent },
{ path: 'course/:id', component: CourseDetailComponent },
{ path: 'lesson/:id', component: LessonDetailComponent }

];
=======

const routes: Routes = [];
>>>>>>> 5756ca7181482737e48525b5e5c61408e9a795fd

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
