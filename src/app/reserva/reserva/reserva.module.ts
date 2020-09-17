import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReservaComponent } from './reserva.component';
import { MenuModule } from 'src/app/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule
  ],
  declarations: [
    ReservaComponent
  ],
  exports: [
    ReservaComponent
  ]



})
export class ReservaModule {}
