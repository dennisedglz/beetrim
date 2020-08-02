import { Component, OnInit, Input } from '@angular/core';
import { PerfilDto } from 'src/app/dto/PerfilDto';

@Component({
  selector: 'app-perfil-avatar',
  templateUrl: './perfil-avatar.component.html',
  styleUrls: ['./perfil-avatar.component.scss'],
})
export class PerfilAvatarComponent implements OnInit {

  @Input() perfil = new PerfilDto();
  constructor() { }

  ngOnInit() {
  }

}
