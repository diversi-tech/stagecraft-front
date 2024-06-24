import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsRepositoryComponent } from './components/questions-repository/questions-repository.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    MenuComponent,
    LoginComponent,
    QuestionsComponent,
    QuestionsRepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
