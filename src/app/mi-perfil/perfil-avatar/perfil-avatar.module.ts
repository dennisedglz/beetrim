import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilAvatarComponent } from './perfil-avatar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    PerfilAvatarComponent
  ],
  exports: [
    PerfilAvatarComponent
  ]



})
export class PerfilAvatarModule {}
