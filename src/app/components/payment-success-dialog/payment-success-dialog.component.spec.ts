import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessDialogComponent } from './payment-success-dialog.component';

describe('PaymentSuccessDialogComponent', () => {
  let component: PaymentSuccessDialogComponent;
  let fixture: ComponentFixture<PaymentSuccessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentSuccessDialogComponent]
    });
    fixture = TestBed.createComponent(PaymentSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
