import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCoursComponent } from './buy-cours.component';

describe('BuyCoursComponent', () => {
  let component: BuyCoursComponent;
  let fixture: ComponentFixture<BuyCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyCoursComponent]
    });
    fixture = TestBed.createComponent(BuyCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
