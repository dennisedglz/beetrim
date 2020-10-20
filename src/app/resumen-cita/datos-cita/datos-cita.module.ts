import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatosCitaComponent } from './datos-cita.component';
import { PerfilAvatarModule } from 'src/app/mi-perfil/perfil-avatar/perfil-avatar.module';
import { BeeworkerAvatarModule } from 'src/app/beeworker/beeworker-avatar/beeworker-avatar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeeworkerAvatarModule
  ],
  declarations: [
    DatosCitaComponent
  ],
  exports: [
    DatosCitaComponent
  ]



})
export class DatosCitaModule {}
