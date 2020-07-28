import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilAvatarModule } from './perfil-avatar/perfil-avatar.module';
import { PerfilPage } from './perfil.page';
import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilCardModule } from './perfil-card/perfil-card.module';
import { PerfilResenasModule } from './perfil-resenas/perfil-resenas.module';
import { PerfilActividadesComponent } from './perfil-actividades/perfil-actividades.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    PerfilAvatarModule,
    PerfilCardModule,
    PerfilResenasModule
  ],
  declarations: [
    PerfilPage,
    PerfilActividadesComponent
  ]
})
export class PerfilPageModule {}