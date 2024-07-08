import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { progressbarComponent } from './components/progressbar/progressbar.component';
import { TaskFilesComponent } from './components/task-files/task-files.component';
import { UserCoursesComponent } from './components/user-courses/user-courses.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ForumComponent } from './components/forum/forum.component';
import { AdminForumComponent } from './components/admin-forum/admin-forum.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';

const routes: Routes = [
  // {path:"myHome-שם שבחרתי",component:HomeComponentשם המחלקה של הקומפוננטה}
{path:"login",component:LoginComponent},
{path:"courseList",component:CourseListComponent},
{path:"feedback",component:FeedbackComponent},
{path:"progressBar",component:progressbarComponent},
{path:"taskFiles",component:TaskFilesComponent},
{path:"userCourses",component:UserCoursesComponent},
{ path: 'forum', component: ForumComponent },
{ path: 'admin-forum', component: AdminForumComponent },
// { path: '', redirectTo: '/forum', pathMatch: 'full' },
// { path: '**', redirectTo: '/forum' },
{ path: 'Achievements', component: AchievementsComponent },
{ path: 'myCourse', component: CourseOverviewComponent },
{path:'task-files',component:TaskFilesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

