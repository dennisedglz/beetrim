import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepHorarioComponent } from './step-horario.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    StepHorarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    StepHorarioComponent
  ]
})
export class StepHorarioModule { }
