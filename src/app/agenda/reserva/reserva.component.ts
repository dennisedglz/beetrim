import { Component, OnInit, Input } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { AgendaDto } from 'src/app/dto/StepDto';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent implements OnInit {
  @Input() idPerfil= 'arturo@hotmail.com';
  agendas = new Array<AgendaDto>();
  constructor(public agendaService: AgendaService) { }

  ngOnInit() {
    this.agendaService.consultarAgendaPorId('agenda', this.idPerfil).subscribe((listaAgendas) => {
      this.agendas=listaAgendas;
    });
  }

}
