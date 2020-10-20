import { Component, OnInit, Input } from '@angular/core';
import { BeeworkerDto } from 'src/app/dto/BeeworkerDto';
import { UsuarioClienteDto } from 'src/app/dto/UsuarioClienteDto';

@Component({
  selector: 'app-beeworker-card',
  templateUrl: './beeworker-card.component.html',
  styleUrls: ['./beeworker-card.component.scss'],
})
export class BeeworkerCardComponent implements OnInit {
  @Input() perfil = new BeeworkerDto();
  sinFotoUrl='https://firebasestorage.googleapis.com/v0/b/beetrim-b69e0.appspot.com/o/blank-profile-picture-973460_1280.png?alt=media&token=cdeb8148-e1eb-48bf-9ab0-223906c0db5c';

  constructor() { }

  ngOnInit() {}

}
