import { Component, OnInit, Input } from '@angular/core';
import { PerfilDto } from 'src/app/dto/PerfilDto';

@Component({
  selector: 'app-perfil-avatar',
  templateUrl: './perfil-avatar.component.html',
  styleUrls: ['./perfil-avatar.component.scss'],
})
export class PerfilAvatarComponent implements OnInit {

  @Input() perfil = new PerfilDto();
  sinFotoUrl='https://firebasestorage.googleapis.com/v0/b/beetrim-b69e0.appspot.com/o/blank-profile-picture-973460_1280.png?alt=media&token=cdeb8148-e1eb-48bf-9ab0-223906c0db5c';
    
  constructor() { }

  ngOnInit() {
  }

}
