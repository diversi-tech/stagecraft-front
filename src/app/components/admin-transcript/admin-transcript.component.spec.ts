import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTranscriptComponent } from './admin-transcript.component';

describe('AdminTranscriptComponent', () => {
  let component: AdminTranscriptComponent;
  let fixture: ComponentFixture<AdminTranscriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTranscriptComponent]
    });
    fixture = TestBed.createComponent(AdminTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
