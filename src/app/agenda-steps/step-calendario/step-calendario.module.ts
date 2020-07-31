import { NgModule, LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import { CommonModule, registerLocaleData } from '@angular/common';
import { StepCalendarioComponent } from './step-calendario.component';
import { NgCalendarModule } from 'ionic2-calendar';

registerLocaleData(es);

@NgModule({
  declarations: [
    StepCalendarioComponent
  ],
  imports: [
    CommonModule,
    NgCalendarModule
  ],
  exports: [
    StepCalendarioComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX' }
  ]
})
export class StepCalendarioModule { }