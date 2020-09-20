import { Component, OnInit, Input } from '@angular/core';
import { UsuarioClienteDto } from 'src/app/dto/UsuarioClienteDto';

@Component({
  selector: 'app-beeworker-avatar',
  templateUrl: './beeworker-avatar.component.html',
  styleUrls: ['./beeworker-avatar.component.scss'],
})
export class BeeworkerAvatarComponent implements OnInit {

  @Input() perfil = new UsuarioClienteDto();
  sinFotoUrl='https://firebasestorage.googleapis.com/v0/b/beetrim-b69e0.appspot.com/o/blank-profile-picture-973460_1280.png?alt=media&token=cdeb8148-e1eb-48bf-9ab0-223906c0db5c';
    
  constructor() { }

  ngOnInit() {
  }

}
