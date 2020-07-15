import { Component, OnInit } from '@angular/core';
import { PerfilDto } from '../dto/PerfilDto';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-card',
  templateUrl: './perfil-card.page.html',
  styleUrls: ['./perfil-card.page.scss'],
})
export class PerfilCardPage implements OnInit {
  perfil= new PerfilDto();
  constructor(public perfilService: PerfilService) { }

  ngOnInit() {
       //TODO obtener idPerfil de sesión
       this.perfilService.consultarPorId("perfiles", "arturo@hotmail.com").subscribe((resultado) => {
        if (resultado.payload.data() != null) {
          this.perfil.idPerfil = resultado.payload.id
          this.perfil = resultado.payload.data() as PerfilDto;
          console.log(this.perfil);
        } else {
          console.log("No se ha encontrado un document con ese ID");
        }
      });
  }

}
