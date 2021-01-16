import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StepCuartosComponent } from './step-cuartos.component';



@NgModule({
  declarations: [
    StepCuartosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    StepCuartosComponent
  ]
})
export class StepCuartosModule { }
