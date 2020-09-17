import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaPage } from './reserva-page/reserva.page';
import { DetallesReservaPage } from './detalles-reserva/detalles-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaPage
  },
  {
    path: 'detalles',
    component: DetallesReservaPage 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaPageRoutingModule {}
