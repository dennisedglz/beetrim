import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAvatarComponent } from './perfil-avatar/perfil-avatar.component';
import { PerfilPage } from './perfil.page';
import { PerfilCardComponent } from './perfil-card/perfil-card.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
