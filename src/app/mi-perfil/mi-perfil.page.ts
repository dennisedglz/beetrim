import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  perfilForm: FormGroup;
  constructor(private appData: AppDataService) {
    this.perfilForm = new FormGroup({
      email: new FormControl(this.appData.user.correo, [Validators.required]),
      nombre: new FormControl(this.appData.user.nombre, [Validators.required]),
      apellidos: new FormControl(this.appData.user.apellidos, [Validators.required]),
      telefono: new FormControl(this.appData.user.telefono, [Validators.required]),
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    
  }

}
