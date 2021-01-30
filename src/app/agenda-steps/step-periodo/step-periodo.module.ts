import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepPeriodoComponent } from './step-periodo.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    StepPeriodoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    StepPeriodoComponent
  ]
})
export class StepPeriodoModule { }
