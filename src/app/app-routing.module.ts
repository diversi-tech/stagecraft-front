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
import { SignupComponent } from './components/signup/signup.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

import { AdminAddCourseForUserComponent } from './components/admin-add-course-for-user/admin-add-course-for-user.component';
import { AdminSearchUserComponent } from './components/admin-search-user/admin-search-user.component';
import { AdminComponent } from './components/AdminEdit/admin.component';

const routes: Routes = [
  // {path:"myHome-שם שבחרתי",component:HomeComponentשם המחלקה של הקומפוננטה}
{path:"login",component:LoginComponent},
{path:"courseList",component:CourseListComponent},
{path:"feedback",component:FeedbackComponent},
{path:"progressBar",component:progressbarComponent},
{path:"taskFiles",component:TaskFilesComponent},
{path:"userCourses",component:UserCoursesComponent},
{ path: 'forum', component: ForumComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'admin-forum', component: AdminForumComponent },
// { path: '', redirectTo: '/forum', pathMatch: 'full' },
// { path: '**', redirectTo: '/forum' },
{ path: 'Achievements', component: AchievementsComponent },
{ path: 'myCourse', component: CourseOverviewComponent },
{path:'task-files',component:TaskFilesComponent},
{path:'feedback',component:FeedbackComponent},
{ path: '', component: CourseListComponent },
{ path: 'course/:id', component: CourseDetailsComponent },
{ path: 'serchUser',component:AdminSearchUserComponent},
{path:'adminCourse',component:AdminAddCourseForUserComponent},

{path:"addCourse/:code/:name",component:AdminAddCourseForUserComponent},
{path:"login",component:LoginComponent},
{path:"AdminCourses", component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

