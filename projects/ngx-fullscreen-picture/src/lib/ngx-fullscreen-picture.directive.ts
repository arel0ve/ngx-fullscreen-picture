import { Directive, HostListener, Input, OnInit } from '@angular/core';

import { NgxFullscreenPictureService } from './ngx-fullscreen-picture.service';
import { NgxFullscreenPictureComponent } from './ngx-fullscreen-picture.component';

/**
 * To open picture on fullscreen
 *
 * @example
 * // on click open picture on fullscrenn with url == message.picture_url
 * <div [libNgxFullscreenPicture]="message.picture_url">
 */
@Directive({
  selector: '[libNgxFullscreenPicture]'
})
export class NgxFullscreenPictureDirective implements OnInit {

  @Input('libNgxFullscreenPicture') pictureURL: string;

  constructor(
    private fullscreenPictureService: NgxFullscreenPictureService
  ) {}

  ngOnInit() {
  }

  @HostListener('click') onClick() {
    this.fullscreenPictureService.openPicture(NgxFullscreenPictureComponent, {src: this.pictureURL});
    document.addEventListener('keyup', this.escapeFullscreenPicture.bind(this));
  }

  private escapeFullscreenPicture(e) {
    if (e.key === 'Escape') {
      this.fullscreenPictureService.closePicture();
    }
    document.removeEventListener('keyup', this.escapeFullscreenPicture);
  }

}
