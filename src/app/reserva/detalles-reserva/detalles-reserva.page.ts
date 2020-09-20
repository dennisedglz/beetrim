import { Component, OnInit } from '@angular/core';
import { UsuarioClienteDto } from 'src/app/dto/UsuarioClienteDto';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaDto } from 'src/app/dto/StepDto';

@Component({
  selector: 'app-detalles-reserva',
  templateUrl: './detalles-reserva.page.html',
  styleUrls: ['./detalles-reserva.page.scss'],
})
export class DetallesReservaPage implements OnInit {
  private sub: any;
  reserva = new AgendaDto();
  perfil = new UsuarioClienteDto();
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log('entro');
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        if (params && params.reserva) {
          this.reserva = JSON.parse(params.reserva);
        }
        console.log(params)
      });
  }

  goBack(){
    this.router.navigateByUrl('/reserva', { replaceUrl: true });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
