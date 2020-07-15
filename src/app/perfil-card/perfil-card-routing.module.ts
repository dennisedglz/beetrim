import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilCardPage } from './perfil-card.page';
import { PerfilAvatarComponent } from './perfil-avatar/perfil-avatar.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilCardPage
  },
  {
    path: 'avatar',
    component: PerfilAvatarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilCardPageRoutingModule {}
