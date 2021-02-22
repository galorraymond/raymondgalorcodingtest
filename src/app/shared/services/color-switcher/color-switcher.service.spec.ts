import { TestBed } from '@angular/core/testing';

import { ColorSwitcherService } from './color-switcher.service';

describe('ColorSwitcherService', () => {
  let service: ColorSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
