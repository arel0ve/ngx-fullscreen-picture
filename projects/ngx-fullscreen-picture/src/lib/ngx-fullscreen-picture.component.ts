import { Component, OnInit } from '@angular/core';

import { NgxFullscreenConfig, NgxFullscreenPictureService } from './ngx-fullscreen-picture.service';

@Component({
  selector: 'lib-ngx-fullscreen-picture',
  templateUrl: './ngx-fullscreen-picture.component.html',
  styleUrls: ['./ngx-fullscreen-picture.component.html']
})
export class NgxFullscreenPictureComponent implements OnInit {

  constructor(private fullscreenPictureService: NgxFullscreenPictureService,
              public config: NgxFullscreenConfig) { }

  ngOnInit() {
  }

  closeFullscreenPicture() {
    this.fullscreenPictureService.closePicture();
  }

}
