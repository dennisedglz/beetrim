import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilCardPageRoutingModule } from './perfil-card-routing.module';
import { PerfilCardPage } from './perfil-card.page';
import { PerfilAvatarModule } from './perfil-avatar/perfil-avatar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilCardPageRoutingModule,
    PerfilAvatarModule
  ],
  declarations: [
    PerfilCardPage
  ]
})
export class PerfilCardPageModule {}
