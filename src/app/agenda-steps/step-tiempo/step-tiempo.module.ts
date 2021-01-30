import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepTiempoComponent } from './step-tiempo.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    StepTiempoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    StepTiempoComponent
  ]
})
export class StepTiempoModule { }
