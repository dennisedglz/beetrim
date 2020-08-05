import { Component, OnInit } from '@angular/core';
import { PerfilDto } from 'src/app/dto/PerfilDto';
import { ActivatedRoute, Router } from '@angular/router';
import { ResenasDto } from 'src/app/dto/ResenasDto';

@Component({
  selector: 'app-detalles-reserva',
  templateUrl: './detalles-reserva.component.html',
  styleUrls: ['./detalles-reserva.component.scss'],
})
export class DetallesReservaComponent implements OnInit {
  private sub: any;
  reserva: ResenasDto;
  perfil= new PerfilDto();
  foto='https://firebasestorage.googleapis.com/v0/b/beetrim-b69e0.appspot.com/o/limpieza-casa_1.jpg?alt=media&token=b65eb13b-d091-4686-a6ec-dca9e8979b5b';
  
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.reserva = params['reserva'];
        console.log(this.reserva)
      });

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
