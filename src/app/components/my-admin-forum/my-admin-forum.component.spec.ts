import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdminForumComponent } from './my-admin-forum.component';

describe('MyAdminForumComponent', () => {
  let component: MyAdminForumComponent;
  let fixture: ComponentFixture<MyAdminForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAdminForumComponent]
    });
    fixture = TestBed.createComponent(MyAdminForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
