import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router, private authSvc: AuthService ) {}

  goToPerfil() {
    this.router.navigateByUrl('/mi-perfil', { replaceUrl: true });
  }

  goToAgenda() {
    console.log('Agregar función a tu página');
  }

  logout() {
    this.authSvc.logoutUser()
      .then(res => {
        console.log(res);
        this.router.navigateByUrl('/login', { replaceUrl: true });
      })
      .catch(error => {
        console.log(error);
      })
  }

}
