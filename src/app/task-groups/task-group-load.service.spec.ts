import { TestBed } from '@angular/core/testing';

import { TaskGroupLoadService } from './task-group-load.service';

describe('TaskGroupLoadService', () => {
  let service: TaskGroupLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskGroupLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
