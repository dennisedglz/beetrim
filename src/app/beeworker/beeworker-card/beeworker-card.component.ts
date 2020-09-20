import { Component, OnInit, Input } from '@angular/core';
import { UsuarioClienteDto } from 'src/app/dto/UsuarioClienteDto';

@Component({
  selector: 'app-beeworker-card',
  templateUrl: './beeworker-card.component.html',
  styleUrls: ['./beeworker-card.component.scss'],
})
export class BeeworkerCardComponent implements OnInit {
  @Input() perfil = new UsuarioClienteDto();

  constructor() { }

  ngOnInit() {}

}
