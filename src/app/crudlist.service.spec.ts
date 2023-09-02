import { TestBed } from '@angular/core/testing';

import { CrudlistService } from './crudlist.service';

describe('CrudlistService', () => {
  let service: CrudlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

