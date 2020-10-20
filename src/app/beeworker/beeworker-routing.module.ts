import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilAvatarComponent } from '../mi-perfil/perfil-avatar/perfil-avatar.component';
import { BeeworkerPage } from './beeworker.page';


const routes: Routes = [
  {
    path: '',
    component: BeeworkerPage
  },
  {
    path: 'avatar',
    component: PerfilAvatarComponent
  },
  {
    path: 'lista-beeworkers',
    loadChildren: () => import('./lista-beeworkers/lista-beeworkers.module').then( m => m.ListaBeeworkersPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeeworkerPageRoutingModule {}
