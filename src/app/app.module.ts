import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminCustomerApprovalComponent } from './components/admin-customer-approval/admin-customer-approval.component';
import { HttpClientModule } from '@angular/common/http'; // ייבוא HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    MenuComponent,
    LoginComponent,
    AdminCustomerApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
