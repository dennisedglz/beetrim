import { Component, OnInit, Input } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { AgendaDto } from 'src/app/dto/StepDto';
import { AppDataService } from 'src/app/services/app-data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent implements OnInit {
  agendas = new Array<AgendaDto>();
  idPerfil= this.appData.user.userAuthID;
  constructor(public agendaService: AgendaService,
              private appData: AppDataService,
              private router: Router,
    ) { }

  ngOnInit() {
    this.agendaService.consultarAgendaPorId('agenda', this.idPerfil).subscribe((listaAgendas) => {
      this.agendas=listaAgendas;
    });
  }

  abrirDetalles(reserva){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        reserva: JSON.stringify(reserva)
      }
    };
    this.router.navigate(['reserva/detalles'], navigationExtras);

  }

}
