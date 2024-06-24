import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsRepositoryComponent } from './questions-repository.component';

describe('QuestionsRepositoryComponent', () => {
  let component: QuestionsRepositoryComponent;
  let fixture: ComponentFixture<QuestionsRepositoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsRepositoryComponent]
    });
    fixture = TestBed.createComponent(QuestionsRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
