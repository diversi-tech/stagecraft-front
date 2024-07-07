import { TestBed } from '@angular/core/testing';

import { CourseAchievementsService } from './course-achievements.service';

describe('CourseAchievementsService', () => {
  let service: CourseAchievementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseAchievementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
