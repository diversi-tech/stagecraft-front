import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/AdminEdit/admin.service';
import { courses } from '../../class/Admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: Array<courses> = [];
   Admin!: courses;
  isEdit = false;
  
  constructor(private adminSrvc: AdminService) {}

  ngOnInit(): void {
    this.adminSrvc.GetAllAdminCourses().subscribe(
      mydata => {
        this.admin = mydata;
      }, 
      err => {
        alert("זה לא טוב")
      }
    );
  }

  onSave(courses_id: any,courses_name: any, title: any, description: any, price: any, several_chapters: any, length: any, numberOfViewers: any) {
     let g=new Date();
    if (!this.isEdit)
      {
        let newAdmin = new courses(courses_id ,courses_name, title, description, g, new Date() , price, several_chapters, length, numberOfViewers);

        this.adminSrvc.AddAdminCourses(newAdmin).subscribe(
          data => {
          if (Array.isArray(data)) {
            this.admin = data;
          } else {
            this.admin = [data];
            this.adminSrvc.GetAllAdminCourses().subscribe(
              mydata => {
                this.admin = mydata;
              }, 
              err => {
                alert("זה לא טוב")
              }
            );
          }
          alert(newAdmin.title);
        },
          err => { console.error(err); }
        );
        alert("הקורס הוסף בהצלחה")
       }
       
      else
      {
        let newAdmin = new courses(courses_id ,courses_name, title, description, g, new Date(), price, several_chapters, length, numberOfViewers);

        this.isEdit=false;
        this.adminSrvc.UpdateAdminCourses(courses_id, newAdmin).subscribe(
          data => {
            if (Array.isArray(data)) {
              this.admin = data;
            } else {
              this.admin = [data];
              this.adminSrvc.GetAllAdminCourses().subscribe(
                mydata => {
                  this.admin = mydata;
                }, 
                err => {
                  alert("זה לא טוב")
                }
              );
            }
          },
            err => { console.error(err); }
          );
          alert("הקורס עודכן בהצלחה")
      }
  }

  onEdit(ind: any) {
     this.Admin = this.admin[ind];
    this.isEdit = true;
  }
  
  onDelete(courses_id:any)
  {
    this.adminSrvc.DeleteAdminCourse(courses_id).subscribe(
      data => {
        if (Array.isArray(data)) {
          this.admin = data;
        } else {
          this.admin = [data];
          this.adminSrvc.GetAllAdminCourses().subscribe(
            mydata => {
              this.admin = mydata;
            }, 
            err => {
              alert("זה לא טוב")
            }
          );
        }
      },
        err => { console.error(err); }
    );
    alert("הקורס הוסר בהצלחה")
  }
}