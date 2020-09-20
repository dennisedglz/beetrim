import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BeeworkerPerfilComponent } from './beeworker-perfil.component';
import { BeeworkerActividadesModule } from '../beeworker-actividades/beeworker-actividades.module';
import { BeeworkerCardModule } from '../beeworker-card/perfil-card.module';
import { BeeworkerResenasModule } from '../beeworker-resenas/beeworker-resenas.module';
import { BeeworkerPageRoutingModule } from '../beeworker-routing.module';
import { BeeworkerAvatarModule } from '../beeworker-avatar/beeworker-avatar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeeworkerPageRoutingModule,
    BeeworkerAvatarModule,
    BeeworkerCardModule,
    BeeworkerResenasModule,
    BeeworkerActividadesModule
  ],
  declarations: [
    BeeworkerPerfilComponent
  ],
  exports: [
    BeeworkerPerfilComponent
  ]
})
export class BeeworkerPerfilModule {}
