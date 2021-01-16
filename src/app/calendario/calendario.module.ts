import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

import { CalendarioPage } from './calendario.page';
import { NgCalendarModule  } from 'ionic2-calendar';

registerLocaleData(es);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalendarioPage],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX' }
  ]
})
export class CalendarioPageModule {}
