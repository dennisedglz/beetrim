import { Component, OnInit, Input } from '@angular/core';
import { AgendaDto } from 'src/app/dto/StepDto';
import { AppDataService } from 'src/app/services/app-data.service';
import { Router, NavigationExtras } from '@angular/router';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent implements OnInit {
  agendas = new Array<AgendaDto>();
  idPerfil = this.appData.user.userAuthID;
  constructor(private agendaService: AgendaService,
    private appData: AppDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.agendaService.consultarAgendaPorId(this.idPerfil).subscribe((listaAgendas) => {
      this.agendas = listaAgendas;
      this.agendas.sort((a, b) => {
        return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
      });
    });
  }

  abrirDetalles(reserva) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        reserva: JSON.stringify(reserva)
      }
    };
    this.appData.datosCita = reserva;
    this.router.navigate(['reserva/detalles'], navigationExtras);
  }

}
