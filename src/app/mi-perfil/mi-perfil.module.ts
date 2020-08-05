import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiPerfilPageRoutingModule } from './mi-perfil-routing.module';

import { MiPerfilPage } from './mi-perfil.page';
import { MenuModule } from '../menu/menu.module';
import { PerfilAvatarModule } from '../perfil/perfil-avatar/perfil-avatar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiPerfilPageRoutingModule,
    MenuModule,
    PerfilAvatarModule
  ],
  declarations: [MiPerfilPage]
})
export class MiPerfilPageModule {}
