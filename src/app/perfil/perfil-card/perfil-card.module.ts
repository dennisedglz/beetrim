import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilCardComponent } from './perfil-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    PerfilCardComponent
  ],
  exports: [
    PerfilCardComponent
  ]



})
export class PerfilCardModule {}
