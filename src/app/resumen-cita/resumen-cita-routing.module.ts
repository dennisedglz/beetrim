import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenCitaPage } from './resumen-cita.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenCitaPageRoutingModule {}
