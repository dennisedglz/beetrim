import { Component, OnInit } from '@angular/core';
import { BeeworkerDto } from '../dto/BeeworkerDto';
import { BeeworkerService } from './services/beeworker.service';

@Component({
  selector: 'app-beeworker-page',
  templateUrl: './beeworker.page.html',
  styleUrls: ['./beeworker.page.scss'],
})
export class BeeworkerPage implements OnInit {
  perfil = new BeeworkerDto();
  idPerfil = 'CbD8MygqmVpvq891C3iU'; //todo
  constructor(public beeworkerService: BeeworkerService) { }

  ngOnInit() {
       //TODO obtener idPerfil de sesión
       this.beeworkerService.getBeeworker(this.idPerfil).subscribe((resultado) => {
        this.perfil = resultado;
      });
  }

  
}
