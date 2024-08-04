import { TestBed } from '@angular/core/testing';

import { MyForumService } from './my-forum.service';

describe('MyForumService', () => {
  let service: MyForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
