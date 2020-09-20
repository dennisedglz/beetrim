import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BeeworkerCardComponent } from './beeworker-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    BeeworkerCardComponent
  ],
  exports: [
    BeeworkerCardComponent
  ]



})
export class BeeworkerCardModule {}
