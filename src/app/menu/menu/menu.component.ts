import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() selectedTab = 'agenda';

  constructor(private router: Router, 
              private authSvc: AuthService,
  ) { }

  ngOnInit() { }

  goToInit(){
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

  goToPerfil() {
    this.router.navigateByUrl('/mi-perfil', { replaceUrl: true });
  }

  goToAgenda() {
    this.router.navigateByUrl('/agenda', { replaceUrl: true });
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
