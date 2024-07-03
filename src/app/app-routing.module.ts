import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminForumComponent } from './components/admin-forum/admin-forum.component';
import { ForumComponent } from './components/forum/forum.component';


const routes: Routes = [
  { path: 'forum', component: ForumComponent },
  { path: 'admin-forum', component: AdminForumComponent },
  { path: '', redirectTo: '/forum', pathMatch: 'full' },
  { path: '**', redirectTo: '/forum' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
