import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BeeworkerActividadesComponent } from './beeworker-actividades.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    BeeworkerActividadesComponent
  ],
  exports: [
    BeeworkerActividadesComponent
  ]



})
export class BeeworkerActividadesModule {}
