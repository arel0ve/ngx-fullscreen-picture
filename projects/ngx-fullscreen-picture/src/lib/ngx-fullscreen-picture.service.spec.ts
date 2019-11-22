import { TestBed } from '@angular/core/testing';

import { NgxFullscreenPictureService } from './ngx-fullscreen-picture.service';

describe('NgxFullscreenPictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFullscreenPictureService = TestBed.get(NgxFullscreenPictureService);
    expect(service).toBeTruthy();
  });
});
