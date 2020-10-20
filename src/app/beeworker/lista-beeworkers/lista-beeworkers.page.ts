import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BeeworkerDto } from 'src/app/dto/BeeworkerDto';
import { AppDataService } from 'src/app/services/app-data.service';
import { BeeworkerService } from '../services/beeworker.service';

@Component({
  selector: 'app-lista-beeworkers',
  templateUrl: './lista-beeworkers.page.html',
  styleUrls: ['./lista-beeworkers.page.scss'],
})
export class ListaBeeworkersPage implements OnInit {
  private sub: any;
  latitud: number;
  longitud: number;
  listaBeeworkers: Array<BeeworkerDto>

  constructor(private beeworkerService: BeeworkerService, private route: ActivatedRoute,
              private router: Router, private appData: AppDataService) { 
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        if (params) {
          this.latitud = JSON.parse(params.latitud);
          this.longitud = JSON.parse(params.longitud);
        }
      });
  }

  ngOnInit() {
    this.listaBeeworkers = new Array<BeeworkerDto>();
    //ToDo agregar latitud y longitud de la reserva
    this.beeworkerService.getBeeworkerCercano(21.8804477, -102.293085).then(beeworkersCercanos => {
    //this.beeworkerService.getBeeworkerCercano(this.latitud, this.longitud).then(beeworkersCercanos => {
    this.listaBeeworkers = beeworkersCercanos;
  }); 
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        beeworker: JSON.stringify(this.listaBeeworkers.find(b=> b.id === this.appData.datosCita.id_empleado))
      }
    };
    this.router.navigate(['/beeworker'], navigationExtras);
  }

}
