import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadingVideoComponent } from './uploading-video.component';

describe('UploadingVideoComponent', () => {
  let component: UploadingVideoComponent;
  let fixture: ComponentFixture<UploadingVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadingVideoComponent]
    });
    fixture = TestBed.createComponent(UploadingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
