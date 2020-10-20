import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenCitaPageRoutingModule } from './resumen-cita-routing.module';

import { ResumenCitaPage } from './resumen-cita.page';
import { DatosCitaModule } from './datos-cita/datos-cita.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenCitaPageRoutingModule,
    DatosCitaModule,
    MenuModule
  ],
  declarations: [ResumenCitaPage]
})
export class ResumenCitaPageModule {}
