import { Component, OnInit, Input } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { PerfilDto } from 'src/app/dto/PerfilDto';
import { ResenasDto } from 'src/app/dto/ResenasDto';

@Component({
  selector: 'app-perfil-resenas',
  templateUrl: './perfil-resenas.component.html',
  styleUrls: ['./perfil-resenas.component.scss'],
})
export class PerfilResenasComponent implements OnInit {
  @Input() idPerfil;
  resenas = new Array<ResenasDto>();
  constructor(public perfilService: PerfilService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.perfilService.consultarResenaPorId('resenas', this.idPerfil).subscribe((resenas) => {
      for (let resena of resenas) {
        this.resenas.push(resena as ResenasDto);
      }
      console.log(this.resenas);
      for (let resena of this.resenas) {
        this.perfilService.consultarPorId('perfiles', resena.idUsuarioCalificador).subscribe((perfil) => {
          if (perfil.payload.data() != null) {
            resena.perfilCalificador = perfil.payload.data() as PerfilDto;
          } else {
            console.log('No se ha encontrado un document con ese ID');
          }
        }); 
      }
    });
  }

}