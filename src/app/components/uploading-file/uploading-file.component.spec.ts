import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadingFileComponent } from './uploading-file.component';

describe('UploadingFileComponent', () => {
  let component: UploadingFileComponent;
  let fixture: ComponentFixture<UploadingFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadingFileComponent]
    });
    fixture = TestBed.createComponent(UploadingFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
