import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PerfilDto } from 'src/app/dto/PerfilDto';
import { PerfilService } from '../services/perfil.service';
import { StepDtoAnswer } from 'src/app/dto/StepDto';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>(); 
  step: StepDtoAnswer = {
    pregunta: 'id_empleado',
    valor: ''
  };
  perfil = new PerfilDto();
  idPerfil = 'juanita@hotmail.com';
  constructor(public perfilService: PerfilService) { }

  ngOnInit() {
       //TODO obtener idPerfil de sesión
       this.perfilService.consultarPorId('perfiles', this.idPerfil).subscribe((resultado) => {
        if (resultado.payload.data() != null) {
          this.perfil.idPerfil = resultado.payload.id
          this.perfil = resultado.payload.data() as PerfilDto;
        } else {
          console.log('No se ha encontrado un document con ese ID');
        }
      });
  }

  nextSlide() {
      this.step.valor = this.idPerfil;
      this.clickSwipe.emit(this.step);
  }
  
}
