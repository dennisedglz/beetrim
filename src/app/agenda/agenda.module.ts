import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';
import { ReservaModule } from './reserva/reserva.module';
import { MenuModule } from '../menu/menu.module';
import { PerfilModule } from '../perfil/perfil/perfil.module';
import { DetallesReservaComponent } from './detalles-reserva/detalles-reserva.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    ReservaModule,
    MenuModule,
    PerfilModule
  ],
  declarations: [AgendaPage,
    DetallesReservaComponent]
})
export class AgendaPageModule {}
