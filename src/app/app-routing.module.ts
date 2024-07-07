import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { progressbarComponent } from './components/progressbar/progressbar.component';
import { TaskFilesComponent } from './components/task-files/task-files.component';
import { UserCoursesComponent } from './components/user-courses/user-courses.component';
import { AchievementsComponent } from './components/achievements/achievements.component';

const routes: Routes = [
  // {path:"myHome-שם שבחרתי",component:HomeComponentשם המחלקה של הקומפוננטה}
{path:"login",component:LoginComponent},
{path:"courseList",component:CourseListComponent},
{path:"feedback",component:FeedbackComponent},
{path:"progressBar",component:progressbarComponent},
{path:"taskFiles",component:TaskFilesComponent},
{path:"userCourses",component:UserCoursesComponent},
{ path: 'Achievements', component: AchievementsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
