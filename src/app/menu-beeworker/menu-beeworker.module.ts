import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuBeeworkerComponent } from './menu-beewoker/menu-beeworker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    MenuBeeworkerComponent
  ],
  exports: [
    MenuBeeworkerComponent
  ]



})
export class MenuBeeworkerModule {}
