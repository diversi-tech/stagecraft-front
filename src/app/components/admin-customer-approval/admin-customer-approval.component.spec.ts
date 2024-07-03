import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerApprovalComponent } from './admin-customer-approval.component';

describe('AdminCustomerApprovalComponent', () => {
  let component: AdminCustomerApprovalComponent;
  let fixture: ComponentFixture<AdminCustomerApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCustomerApprovalComponent]
    });
    fixture = TestBed.createComponent(AdminCustomerApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
