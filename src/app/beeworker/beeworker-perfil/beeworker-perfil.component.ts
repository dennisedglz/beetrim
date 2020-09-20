import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BeeworkerService } from '../services/beeworker.service';
import { StepDtoAnswer } from 'src/app/dto/StepDto';
import { BeeworkerDto } from 'src/app/dto/BeeworkerDto';

@Component({
  selector: 'app-beeworker-perfil',
  templateUrl: './beeworker-perfil.component.html',
  styleUrls: ['./beeworker-perfil.component.scss'],
})
export class BeeworkerPerfilComponent implements OnInit {
  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>(); 
  step: StepDtoAnswer = {
    pregunta: 'id_empleado',
    valor: ''
  };
  perfil = new BeeworkerDto();
  idPerfil = 'CbD8MygqmVpvq891C3iU'; //todo
  constructor(public beeworkerService: BeeworkerService) { }

  ngOnInit() {
       //TODO obtener idPerfil de sesión
       this.beeworkerService.getBeeworker(this.idPerfil).subscribe((resultado) => {
          this.perfil = resultado;
      });
  }

  nextSlide() {
      this.step.valor = this.idPerfil;
      this.clickSwipe.emit(this.step);
  }
  
}
