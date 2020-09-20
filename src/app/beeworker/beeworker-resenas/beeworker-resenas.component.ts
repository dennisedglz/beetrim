import { Component, OnInit, Input } from '@angular/core';
import { UsuarioClienteDto } from 'src/app/dto/UsuarioClienteDto';
import { ResenasDto } from 'src/app/dto/ResenasDto';
import { BeeworkerService } from '../services/beeworker.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-beeworker-resenas',
  templateUrl: './beeworker-resenas.component.html',
  styleUrls: ['./beeworker-resenas.component.scss'],
})
export class BeeworkerResenasComponent implements OnInit {
  @Input() idPerfil;
  resenas = new Array<ResenasDto>();
  constructor(public perfilService: UsuariosService,
              public beeworkerService: BeeworkerService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.idPerfil);
    this.beeworkerService.consultarResenaPorId(this.idPerfil).subscribe((resenas) => {
      this.resenas=resenas;
      for (let resena of this.resenas) {
        this.perfilService.getUsuario(resena.idUsuarioCalificador).subscribe((perfil) => {
          if (perfil) {
            resena.idUsuarioCalificador = perfil;
          } else {
            console.log('No se ha encontrado un document con ese ID');
          }
        }); 
      }
    });
  }

}
