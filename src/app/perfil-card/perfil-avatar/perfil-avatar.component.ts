import { Component, OnInit } from '@angular/core';
import { PerfilDto } from 'src/app/dto/PerfilDto';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-avatar',
  templateUrl: './perfil-avatar.component.html',
  styleUrls: ['./perfil-avatar.component.scss'],
})
export class PerfilAvatarComponent implements OnInit {

  private perfil = new PerfilDto();
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
