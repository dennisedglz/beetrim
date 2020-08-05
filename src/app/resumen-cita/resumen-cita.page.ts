import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen-cita',
  templateUrl: './resumen-cita.page.html',
  styleUrls: ['./resumen-cita.page.scss'],
})
export class ResumenCitaPage implements OnInit {

  constructor(public appData: AppDataService, private router: Router,) { }

  ngOnInit() {
    console.log('Datos ',this.appData.datosCita);
  }

  
  confirmar() {
    this.router.navigateByUrl('/perfil', { replaceUrl: true });
  }
}
