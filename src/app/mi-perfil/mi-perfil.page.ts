import { Component, OnInit } from '@angular/core';
import { PerfilDto } from '../dto/PerfilDto';
import { PerfilService } from '../perfil/services/perfil.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  perfil= new PerfilDto();
  idPerfil = 'arturo@hotmail.com';
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
}
