import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFullscreenPictureComponent } from './ngx-fullscreen-picture.component';

describe('NgxFullscreenPictureComponent', () => {
  let component: NgxFullscreenPictureComponent;
  let fixture: ComponentFixture<NgxFullscreenPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFullscreenPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFullscreenPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
