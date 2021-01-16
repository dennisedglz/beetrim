import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReservaComponent } from './reserva.component';
import { MenuModule } from 'src/app/menu/menu.module';
import es from '@angular/common/locales/es';

registerLocaleData(es);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule
  ],
  declarations: [
    ReservaComponent
  ],
  exports: [
    ReservaComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX' }
  ]



})
export class ReservaModule {}
