import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilResenasComponent } from './perfil-resenas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    PerfilResenasComponent
  ],
  exports: [
    PerfilResenasComponent
  ]



})
export class PerfilResenasModule {}
