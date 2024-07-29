import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder, FormGroup, Validators
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/service/AdminEdit/admin.service';
import { courses } from '../../class/Admin';
import { UploadingFileComponent } from '../uploading-file/uploading-file.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: Array<courses> = [];
  Admin!: courses;
  courseForm!: FormGroup; // Define the FormGroup
  isEdit = false;
  showFileUploadComponent = false;
  showVideoUploadComponent = false;
  currentComponent: 'file' | 'video' = 'file';
  selectedFileName!: File;
  selectedVideoName!: File;

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  constructor(
    private adminSrvc: AdminService, 
    public dialog: MatDialog,
    private fb: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    this.get();
    this.initializeForm();
  }

  get() {
    this.adminSrvc.GetAllAdminCourses().subscribe(
      mydata => {
        this.admin = mydata;
      },
      err => {
        alert("זה לא טוב");
      }
    );
  }

  initializeForm() {
    this.courseForm = this.fb.group({
      courses_id: [null],
      courses_name: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      several_chapters: [null, Validators.required],
      length: ['', Validators.required],
      numberOfViewers: [null, Validators.required]
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.dialogTemplate, {
      width: '500px',
      height: '700px'
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
      videoFile: undefined,
      taskFile: undefined,
      create_at: undefined,
      update_at: undefined
    };
    this.courseForm.reset();
  }

  onSubmit() {
    if (this.courseForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const formData = new FormData();
    const formValues = this.courseForm.value;

    let g = new Date();
    let newAdmin: courses = new courses(
      formValues.courses_id,
      formValues.courses_name,
      formValues.title,
      formValues.description,
      g,
      new Date(),
      formValues.price,
      formValues.several_chapters,
      formValues.length,
      formValues.numberOfViewers,
      "",
      "",
      this.selectedVideoName || this.Admin.videoFile,
      this.selectedFileName || this.Admin.taskFile
    );

    formData.append('courses_id', newAdmin.courses_id?.toString() || "");
    formData.append('courses_name', newAdmin.courses_name || "");
    formData.append('title', newAdmin.title || "");
    formData.append('description', newAdmin.description || "");
    formData.append('create_at', newAdmin.create_at?.toISOString() || "");
    formData.append('update_at', newAdmin.update_at?.toISOString() || "");
    formData.append('price', newAdmin.price?.toString() || "");
    formData.append('several_chapters', newAdmin.several_chapters?.toString() || "");
    formData.append('length', newAdmin.length || "");
    formData.append('numberOfViewers', newAdmin.numberOfViewers?.toString() || "");
    if (this.selectedVideoName)
      formData.append('videoFile', this.selectedVideoName, this.selectedVideoName?.name);
    if (this.selectedFileName)
      formData.append('taskFile', this.selectedFileName, this.selectedFileName?.name);

    console.log('Submitting form data:', formData);

    if (!this.isEdit) {
      this.adminSrvc.AddAdminCourses(formData).subscribe(
        data => {
          console.log('Response from AddAdminCourses:', data);
          if (Array.isArray(data)) {
            this.admin = data;
          } else {
            this.admin.push(data);
          }
          this.get();
          alert("Course added successfully");
        },
        err => {
          console.error('Error adding course:', err);
          alert("Error adding course");
        }
      );
    } else {
      this.adminSrvc.updateAdminCourses(newAdmin.courses_id, formData).subscribe(
        data => {
          console.log('Response from updateAdminCourses:', data);
          if (Array.isArray(data)) {
            this.admin = data;
          } else {
            this.admin = [data];
          }
          this.get();
          alert("Course updated successfully");
        },
        err => {
          console.error('Error updating course:', err);
          alert("Error updating course");
        }
      );
      this.isEdit = false;
    }

    this.dialog.closeAll();
  }

  onEdit(ind: any) {
    this.Admin = this.admin[ind];
    this.isEdit = true;
    this.courseForm.patchValue({
      courses_id: this.Admin.courses_id,
      courses_name: this.Admin.courses_name,
      title: this.Admin.title,
      description: this.Admin.description,
      price: this.Admin.price,
      several_chapters: this.Admin.several_chapters,
      length: this.Admin.length,
      numberOfViewers: this.Admin.numberOfViewers
    });
    this.openDialog();
  }

  onDelete(courses_id: any) {
    this.adminSrvc.DeleteAdminCourse(courses_id).subscribe(
      data => {
        console.log('Response from DeleteAdminCourse:', data);
        if (Array.isArray(data)) {
          this.admin = data;
        } else {
          this.admin = this.admin.filter(course => course.courses_id !== courses_id);
        }
        this.get();
        alert("Course deleted successfully");
      },
      err => {
        console.error('Error deleting course:', err);
        alert("Error deleting course");
      }
    );
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  // toggleComponents(componentType: 'file' | 'video'): void {
  //   if (componentType === 'file') {
  //     this.showFileUploadComponent = true;
  //     this.showVideoUploadComponent = false;
  //     this.currentComponent = 'file';
  //   } else if (componentType === 'video') {
  //     this.showFileUploadComponent = false;
  //     this.showVideoUploadComponent = true;
  //     this.currentComponent = 'video';
  //   }
  // }

  onFileNameSelected(file: File): void {
    this.selectedFileName = file;
  }

  onVideoNameSelected(video: File): void {
    this.selectedVideoName = video;
  }
}
