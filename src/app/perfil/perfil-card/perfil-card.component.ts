import { Component, OnInit, Input } from '@angular/core';
import { PerfilDto } from 'src/app/dto/PerfilDto';

@Component({
  selector: 'app-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.scss'],
})
export class PerfilCardComponent implements OnInit {
  @Input() perfil = new PerfilDto();

  constructor() { }

  ngOnInit() {}

}
