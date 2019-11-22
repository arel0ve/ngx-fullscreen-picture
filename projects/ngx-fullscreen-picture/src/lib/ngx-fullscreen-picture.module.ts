import { NgModule } from '@angular/core';

import { NgxFullscreenPictureComponent } from './ngx-fullscreen-picture.component';
import { NgxFullscreenPictureDirective } from './ngx-fullscreen-picture.directive';

@NgModule({
  declarations: [
    NgxFullscreenPictureComponent,
    NgxFullscreenPictureDirective,
  ],
  imports: [
  ],
  exports: [NgxFullscreenPictureComponent]
})
export class NgxFullscreenPictureModule { }
