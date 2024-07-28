import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidioComponent } from './vidio.component';

describe('VidioComponent', () => {
  let component: VidioComponent;
  let fixture: ComponentFixture<VidioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidioComponent]
    });
    fixture = TestBed.createComponent(VidioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
