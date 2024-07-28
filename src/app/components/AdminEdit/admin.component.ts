import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  showFileUploadComponent = false;
  showVideoUploadComponent = false;
  currentComponent: 'file' | 'video' = 'file';
  selectedFileName!: File;
  selectedVideoName!: File;

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  constructor(private adminSrvc: AdminService, public dialog: MatDialog) {}

  ngOnInit(): void {
   this.get();
  }
  get()
  {
    this.adminSrvc.GetAllAdminCourses().subscribe(
      mydata => {
        this.admin = mydata;
      }, 
      err => {
        alert("זה לא טוב")
      }
    );
  }
  openDialog() {
    const dialogRef = this.dialog.open(this.dialogTemplate, {
      width: '500px', // רוחב הדיאלוג
      height: '700px' // גובה הדיאלוג
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  initializeNewCourse() {
    this.Admin = {
      courses_id: undefined,
      courses_name: '',
      title: '',
      description: '',
      price: undefined,
      several_chapters: undefined,
      length: '',
      numberOfViewers: undefined,
      videoURL: '',
      taskFilesURL: '',
      videoFile : undefined,
      taskFile: undefined, 
      create_at: undefined,
      update_at: undefined
    };
  }
  
  onSave(courses_id: any, courses_name: any, title: any, description: any, price: any, several_chapters: any, length: any, numberOfViewers: any) {
    debugger
    let g = new Date();
    let newAdmin = null;
    if (!this.isEdit) {
      newAdmin = new courses(courses_id ,courses_name, title, description, g, new Date(), 
      price, several_chapters, length, numberOfViewers,"" ,"",
      this.selectedVideoName || this.Admin.videoFile, this.selectedFileName || this.Admin.taskFile);

      const formData = new FormData();
      formData.append('courses_id', newAdmin.courses_id?.toString() || "");
      formData.append('courses_name', newAdmin.courses_name|| "");
      formData.append('title', newAdmin.title|| "");
      formData.append('description', newAdmin.description|| "");
      formData.append('create_at', newAdmin.create_at?.toISOString()|| "");
      formData.append('update_at', newAdmin.update_at?.toISOString() || "");
      formData.append('price', newAdmin.price?.toString() || "");
      formData.append('several_chapters', newAdmin.several_chapters?.toString() || "");
      formData.append('length', newAdmin.length|| "");
      formData.append('numberOfViewers', newAdmin.numberOfViewers?.toString()|| "");
      formData.append('videoFile', this.selectedVideoName || newAdmin.videoFile , 
                       this.selectedVideoName?.name || newAdmin.videoFile?.name);
      formData.append('taskFile', this.selectedFileName || newAdmin.taskFile,
                       this.selectedFileName?.name || newAdmin.taskFile?.name);


      this.adminSrvc.AddAdminCourses(formData).subscribe(
        data => {
          if (Array.isArray(data)) {
            this.admin = data;
          } else {
            this.admin = [data];
            this.get();
          }
        },
        err => { console.error(err); }
      );
      alert("הקורס הוסף בהצלחה")

    } 
    else {
      newAdmin = new courses(courses_id ,courses_name, title, description, g, new Date(), 
      price, several_chapters, length, numberOfViewers,"" ,"",
      this.selectedVideoName || this.Admin.videoFile, this.selectedFileName || this.Admin.taskFile);
     
      const formData = new FormData();
      formData.append('courses_id', newAdmin.courses_id?.toString() || "");
      formData.append('courses_name', newAdmin.courses_name|| "");
      formData.append('title', newAdmin.title|| "");
      formData.append('description', newAdmin.description|| "");
      formData.append('create_at', newAdmin.create_at?.toISOString()|| "");
      formData.append('update_at', newAdmin.update_at?.toISOString() || "");
      formData.append('price', newAdmin.price?.toString() || "");
      formData.append('several_chapters', newAdmin.several_chapters?.toString() || "");
      formData.append('length', newAdmin.length|| "");
      formData.append('numberOfViewers', newAdmin.numberOfViewers?.toString()|| "");
      if(this.selectedVideoName)
        formData.append('videoFile', this.selectedVideoName, this.selectedVideoName?.name);
      if(this.selectedFileName)
      formData.append('taskFile', this.selectedFileName ,this.selectedFileName?.name  );
    
      this.isEdit = false;
      this.adminSrvc.updateAdminCourses(courses_id, formData).subscribe(
        data => {
          if (Array.isArray(data)) {
            this.admin = data;
          } else {
            this.admin = [data];
            this.get();
          }
        },
        err => { console.error(err); }
      );
      alert("הקורס עודכן בהצלחה")
    }
    this.closeDialog();
  }
  onEdit(ind: any) {
    this.Admin = this.admin[ind];
    this.isEdit = true;
    this.openDialog();
  }

  onDelete(courses_id: any) {
    this.adminSrvc.DeleteAdminCourse(courses_id).subscribe(
      data => {
        if (Array.isArray(data)) {
          this.admin = data;
          this.get();
        } else {
          this.admin = [data];
        }
      },
      err => { console.error(err); }
    );
    alert("הקורס הוסר בהצלחה")
  }
  closeDialog() {
    this.dialog.closeAll(); // הוסף פונקציה כדי לסגור את הpopup
  }
  toggleComponents(componentType: 'file' | 'video'): void {
    if (componentType === 'file') {
      this.showFileUploadComponent = true;
      this.showVideoUploadComponent = false;
      this.currentComponent = 'file';
    } else if (componentType === 'video') {
      this.showFileUploadComponent = false;
      this.showVideoUploadComponent = true;
      this.currentComponent = 'video';
    }
  }

  onFileNameSelected(file: File): void {
    this.selectedFileName = file// fileName;
  }

  onVideoNameSelected(VideoName: File): void {
    this.selectedVideoName = VideoName;
  }
  
}
