import { TestBed } from '@angular/core/testing';

import { GameFakeApiServiceService } from './game-fake-api-service.service';

describe('GameFakeApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameFakeApiServiceService = TestBed.get(GameFakeApiServiceService);
    expect(service).toBeTruthy();
  });
});
