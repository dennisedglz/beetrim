import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaPage } from './agenda.page';
import { DetallesReservaComponent } from './detalles-reserva/detalles-reserva.component';

const routes: Routes = [
  {
    path: '',
    component: AgendaPage
  },
  {
    path: 'detalles',
    component: DetallesReservaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaPageRoutingModule {}
