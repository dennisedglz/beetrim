import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BeeworkerResenasModule } from './beeworker-resenas/beeworker-resenas.module';
import { BeeworkerAvatarModule } from './beeworker-avatar/beeworker-avatar.module';
import { BeeworkerActividadesModule } from './beeworker-actividades/beeworker-actividades.module';
import { BeeworkerPage } from './beeworker.page';
import { BeeworkerPageRoutingModule } from './beeworker-routing.module';
import { BeeworkerPerfilModule } from './beeworker-perfil/beeworker-perfil.module';
import { BeeworkerCardModule } from './beeworker-card/perfil-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeeworkerPageRoutingModule,
    BeeworkerAvatarModule,
    BeeworkerCardModule,
    BeeworkerResenasModule,
    BeeworkerActividadesModule,
    BeeworkerPerfilModule
  ],
  declarations: [
    BeeworkerPage,
  ]
})
export class BeeworkerPageModule {}
