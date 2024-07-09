import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCourseForUserComponent } from './admin-add-course-for-user.component';

describe('AdminAddCourseForUserComponent', () => {
  let component: AdminAddCourseForUserComponent;
  let fixture: ComponentFixture<AdminAddCourseForUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddCourseForUserComponent]
    });
    fixture = TestBed.createComponent(AdminAddCourseForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
