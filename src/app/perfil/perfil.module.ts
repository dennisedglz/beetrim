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
import { PerfilModule } from './perfil/perfil.module';
import { PerfilActividadesModule } from './perfil-actividades/perfil-actividades.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    PerfilAvatarModule,
    PerfilCardModule,
    PerfilResenasModule,
    PerfilActividadesModule,
    PerfilModule
  ],
  declarations: [
    PerfilPage,
  ]
})
export class PerfilPageModule {}
