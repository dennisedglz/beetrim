import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgCalendarModule  } from 'ionic2-calendar';

import { AgendaStepsPageRoutingModule } from './agenda-steps-routing.module';
import { AgendaStepsPage } from './agenda-steps.page';

import { StepLugarModule } from './step-lugar/step-lugar.module';
import { StepPeriodoModule } from './step-periodo/step-periodo.module';
import { StepHorarioModule } from './step-horario/step-horario.module';
import { StepCalendarioModule } from './step-calendario/step-calendario.module';
import { StepExtrasModule } from './step-extras/step-extras.module';
import { StepTiempoModule } from './step-tiempo/step-tiempo.module';
import { StepCuartosModule } from './step-cuartos/step-cuartos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaStepsPageRoutingModule,
    NgCalendarModule,
    StepLugarModule,        //Step 1
    StepPeriodoModule,      //Step 2
    //StepTiempoModule,       //Step 3
    StepCuartosModule,       //Step 3
    StepCalendarioModule,   //Step 4
    StepHorarioModule,      //Step 5
    StepExtrasModule,       //Step 6
  ],
  declarations: [
    AgendaStepsPage
  ],
})
export class AgendaStepsPageModule {}
