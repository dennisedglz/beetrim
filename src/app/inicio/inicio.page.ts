import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeeworkerService } from '../beeworker/services/beeworker.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  
  seeList() {
  }

  limpieza() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

}
