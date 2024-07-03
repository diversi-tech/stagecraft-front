import { ComponentFixture, TestBed } from '@angular/core/testing';
import { progressbarComponent } from './progressbar.component';

//  import { ProgressbarComponent } from './progressbar.component';

describe('ProgressbarComponent', () => {
  let component: progressbarComponent;
  let fixture: ComponentFixture<progressbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [progressbarComponent]
    });
    fixture = TestBed.createComponent(progressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
