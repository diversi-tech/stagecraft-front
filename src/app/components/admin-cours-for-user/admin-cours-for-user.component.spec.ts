import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursForUserComponent } from './admin-cours-for-user.component';

describe('AdminCoursForUserComponent', () => {
  let component: AdminCoursForUserComponent;
  let fixture: ComponentFixture<AdminCoursForUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCoursForUserComponent]
    });
    fixture = TestBed.createComponent(AdminCoursForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
