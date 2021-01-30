import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLugarComponent } from './step-lugar.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    StepLugarComponent
  ],
  exports: [
    StepLugarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class StepLugarModule { }
