import { TestBed } from '@angular/core/testing';

import { DiceGameManagementService } from './dice-game-management.service';

describe('DiceGameManagementService', () => {
  let service: DiceGameManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceGameManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
