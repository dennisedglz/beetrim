import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BeeworkerDto } from '../dto/BeeworkerDto';
import { AgendaService } from '../services/agenda.service';
import { AppDataService } from '../services/app-data.service';
import { Location } from "@angular/common";


@Component({
  selector: 'app-beeworker-page',
  templateUrl: './beeworker.page.html',
  styleUrls: ['./beeworker.page.scss'],
})
export class BeeworkerPage implements OnInit {
  private sub: any;
  beeworker: BeeworkerDto;
  constructor(private route: ActivatedRoute, private agendaService: AgendaService,
    private router: Router, private appData: AppDataService, private location: Location) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        if (params && params.beeworker) {
          this.beeworker = JSON.parse(params.beeworker);
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    if (this.appData.datosCita.id) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          reserva: JSON.stringify(this.appData.datosCita)
        }
      };
      this.router.navigate(['reserva/detalles'], navigationExtras);
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          reserva: JSON.stringify(this.appData.datosCita)
        }
      };
      this.router.navigate(['resumen-cita'], navigationExtras);
    }
  }

  guardar() {
    this.appData.datosCita.id_empleado = this.beeworker.id;
    if (this.appData.datosCita.id) {
      this.agendaService.updateAgenda(this.appData.datosCita, this.appData.datosCita.id);
    }
    this.goBack();
  }

  cambiarBeeworker() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        latitud: JSON.stringify(this.appData.datosCita.lat),
        longitud: JSON.stringify(this.appData.datosCita.lng)
      }
    };
    this.router.navigate(['beeworker/lista-beeworkers'], navigationExtras);
  }

}
