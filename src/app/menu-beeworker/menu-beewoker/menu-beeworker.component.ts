import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-beeworker',
  templateUrl: './menu-beeworker.component.html',
  styleUrls: ['./menu-beeworker.component.scss'],
})
export class MenuBeeworkerComponent implements OnInit {
  @Input() selectedTab = 'agenda';

  constructor(private router: Router, 
              private authSvc: AuthService,
  ) { }

  ngOnInit() { }

  goToPerfil() {
    this.router.navigateByUrl('/mi-perfil', { replaceUrl: true });
  }

  goToAgenda() {
    this.router.navigateByUrl('/calendario', { replaceUrl: true });
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
