import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiPerfilPageRoutingModule } from './mi-perfil-routing.module';

import { MiPerfilPage } from './mi-perfil.page';
import { MenuModule } from '../menu/menu.module';
import { PerfilAvatarModule } from './perfil-avatar/perfil-avatar.module';
import { MenuBeeworkerModule } from '../menu-beeworker/menu-beeworker.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiPerfilPageRoutingModule,
    ReactiveFormsModule,
    MenuModule,
    MenuBeeworkerModule,
    PerfilAvatarModule,
  ],
  declarations: [MiPerfilPage]
})
export class MiPerfilPageModule {}
