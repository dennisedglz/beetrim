import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './perfil/perfil.component';
import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
