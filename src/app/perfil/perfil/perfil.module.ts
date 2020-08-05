import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from './perfil.component';
import { PerfilPageRoutingModule } from '../perfil-routing.module';
import { PerfilAvatarModule } from '../perfil-avatar/perfil-avatar.module';
import { PerfilCardModule } from '../perfil-card/perfil-card.module';
import { PerfilResenasModule } from '../perfil-resenas/perfil-resenas.module';
import { PerfilActividadesModule } from '../perfil-actividades/perfil-actividades.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    PerfilAvatarModule,
    PerfilCardModule,
    PerfilResenasModule,
    PerfilActividadesModule
  ],
  declarations: [
    PerfilComponent
  ],
  exports: [
    PerfilComponent
  ]
})
export class PerfilModule {}
