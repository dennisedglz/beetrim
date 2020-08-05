import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenCitaPageRoutingModule } from './resumen-cita-routing.module';

import { ResumenCitaPage } from './resumen-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenCitaPageRoutingModule
  ],
  declarations: [ResumenCitaPage]
})
export class ResumenCitaPageModule {}
