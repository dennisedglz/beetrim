import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLugarComponent } from './step-lugar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StepLugarComponent
  ],
  exports: [
    StepLugarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StepLugarModule { }
