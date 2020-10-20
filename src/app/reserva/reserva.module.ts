import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReservaModule } from './reserva/reserva.module';
import { MenuModule } from '../menu/menu.module';
import { ReservaPageRoutingModule } from './reserva-routing.module';
import { ReservaPage } from './reserva-page/reserva.page';
import { DetallesReservaPage } from './detalles-reserva/detalles-reserva.page';
import { DatosCitaModule } from '../resumen-cita/datos-cita/datos-cita.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaPageRoutingModule,
    ReservaModule,
    MenuModule,
    DatosCitaModule
  ],
  declarations: [ReservaPage,
  DetallesReservaPage]
})
export class ReservaPageModule {}
