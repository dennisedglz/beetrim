import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppDataService } from '../services/app-data.service';
import { PerfilDto } from '../dto/PerfilDto';
import { PerfilService } from '../perfil/services/perfil.service';
import { RegistroService } from '../services/registro.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  perfilForm: FormGroup;
  constructor(
    private appData: AppDataService,
    public perfilService: PerfilService,
    private registerSvc: RegistroService,
    private alertCtrl: AlertController
  ) {
    this.perfilForm = new FormGroup({
      email: new FormControl(this.appData.user.correo, [Validators.required]),
      nombre: new FormControl(this.appData.user.nombre, [Validators.required]),
      apellidos: new FormControl(this.appData.user.apellidos, [Validators.required]),
      telefono: new FormControl(this.appData.user.telefono, [Validators.required]),
    });
   }
  perfil= new PerfilDto();
  idPerfil = 'arturo@hotmail.com';

  ngOnInit() {
       //TODO obtener idPerfil de sesión
       this.perfilService.consultarPorId('perfiles', this.idPerfil).subscribe((resultado) => {
        if (resultado.payload.data() != null) {
          this.perfil.idPerfil = resultado.payload.id
          this.perfil = resultado.payload.data() as PerfilDto;
        } else {
          console.log('No se ha encontrado un document con ese ID');
        }
      });
  }

  onSubmit() {
    this.appData.user.nombre = this.perfilForm.get('nombre').value;
    this.appData.user.apellidos = this.perfilForm.get('apellidos').value;
    this.appData.user.telefono = this.perfilForm.get('telefono').value;

    this.registerSvc.updateUsuario(this.appData.user, this.appData.user.userAuthID).then((res) => {
      this.showAlert('Éxito', 'Los cambios se han guardado correctamente');
    }).catch((err) => {
      this.showAlert('Lo sentimos', 'Ha ocurrido un error al guardar los cambios, por favor intente más tarde');
    });
  }

  async showAlert(header, subheader){
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      buttons: ['OK']
    });
    await alert.present();
  }

}
