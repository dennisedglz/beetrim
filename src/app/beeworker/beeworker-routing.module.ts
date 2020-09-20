import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeeworkerPerfilComponent } from './beeworker-perfil/beeworker-perfil.component';
import { BeeworkerPage } from './beeworker.page';


const routes: Routes = [
  {
    path: '',
    component: BeeworkerPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeeworkerPageRoutingModule {}
