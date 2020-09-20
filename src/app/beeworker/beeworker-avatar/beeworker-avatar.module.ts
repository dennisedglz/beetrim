import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BeeworkerAvatarComponent } from './beeworker-avatar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    BeeworkerAvatarComponent
  ],
  exports: [
    BeeworkerAvatarComponent
  ]



})
export class BeeworkerAvatarModule {}
