import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaStepsPage } from './agenda-steps.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaStepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaStepsPageRoutingModule {}
