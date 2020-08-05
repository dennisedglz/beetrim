import { Component, OnInit, Input } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { AgendaDto } from 'src/app/dto/StepDto';
import { AppDataService } from 'src/app/services/app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent implements OnInit {
  agendas = new Array<AgendaDto>();
  idPerfil= this.appData.user.correo;
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
    console.log(reserva);
    this.router.navigateByUrl('agenda/detalles', {queryParams: { reserva: reserva } });

  }

}
