import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaBeeworkersPage } from './lista-beeworkers.page';

const routes: Routes = [
  {
    path: '',
    component: ListaBeeworkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaBeeworkersPageRoutingModule {}
