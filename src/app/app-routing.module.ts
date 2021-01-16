import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'beeworker',
    loadChildren: () => import('./beeworker/beeworker.module').then( m => m.BeeworkerPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'agendar',
    loadChildren: () => import('./agenda-steps/agenda-steps.module').then( m => m.AgendaStepsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'resumen-cita',
    loadChildren: () => import('./resumen-cita/resumen-cita.module').then( m => m.ResumenCitaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reserva',
    loadChildren: () => import('./reserva/reserva.module').then( m => m.ReservaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule),
    canActivate: [AuthGuard]
  }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
