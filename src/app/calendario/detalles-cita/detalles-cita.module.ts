import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCitaPageRoutingModule } from './detalles-cita-routing.module';

import { DetallesCitaPage } from './detalles-cita.page';
import { PerfilAvatarModule } from 'src/app/mi-perfil/perfil-avatar/perfil-avatar.module';
import { MenuBeeworkerModule } from 'src/app/menu-beeworker/menu-beeworker.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCitaPageRoutingModule,
    PerfilAvatarModule,
    MenuBeeworkerModule
  ],
  declarations: [DetallesCitaPage]
})
export class DetallesCitaPageModule {}
