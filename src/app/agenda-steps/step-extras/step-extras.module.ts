import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepExtrasComponent } from './step-extras.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    StepExtrasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    StepExtrasComponent
  ]
})
export class StepExtrasModule { }
