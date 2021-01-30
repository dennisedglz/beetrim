import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BeeworkerService } from 'src/app/beeworker/services/beeworker.service';
import { BeeworkerDto } from 'src/app/dto/BeeworkerDto';
import { UsuarioClienteDto } from 'src/app/dto/UsuarioClienteDto';
import { AppDataService } from 'src/app/services/app-data.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.page.html',
  styleUrls: ['./detalles-cita.page.scss'],
})

export class DetallesCitaPage implements OnInit {

  usuario = new UsuarioClienteDto();
  constructor(private appData: AppDataService,
    private usuariosService: UsuariosService,
    private router: Router) { }

  ngOnInit() {
    this.usuariosService.getUsuario(this.appData.datosCita.id_cliente).subscribe((resultado) => {
      console.log(resultado);
      this.usuario = resultado;
    });
  }

  goBack(){
    this.router.navigateByUrl('/calendario', { replaceUrl: true });

  }

}
