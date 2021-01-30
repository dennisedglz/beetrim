import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppDataService } from '../services/app-data.service';
import { UsuarioClienteDto } from '../dto/UsuarioClienteDto';
import { UsuariosService } from '../services/usuarios.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  perfilForm: FormGroup;
  constructor(
    private appData: AppDataService,
    private authSvc: AuthService,
    private usuariosService: UsuariosService,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.perfilForm = new FormGroup({
      email: new FormControl(this.appData.user.correo, [Validators.required]),
      nombre: new FormControl(this.appData.user.nombre, [Validators.required]),
      apellidos: new FormControl(this.appData.user.apellidos, [Validators.required]),
      telefono: new FormControl(this.appData.user.telefono, [Validators.required]),
    });
  }
  perfil = new UsuarioClienteDto();
  idPerfil = this.appData.user.userAuthID;

  ngOnInit() {
    this.usuariosService.getUsuario(this.idPerfil).subscribe((resultado) => {
      this.perfil = resultado;
    });
  }

  onSubmit() {
    this.appData.user.nombre = this.perfilForm.get('nombre').value;
    this.appData.user.apellidos = this.perfilForm.get('apellidos').value;
    this.appData.user.telefono = this.perfilForm.get('telefono').value;

    this.usuariosService.updateUsuario(this.appData.user, this.appData.user.userAuthID).then((res) => {
      this.showAlert('Éxito', 'Los cambios se han guardado correctamente');
    }).catch((err) => {
      this.showAlert('Lo sentimos', 'Ha ocurrido un error al guardar los cambios, por favor intente más tarde');
    });
  }

  async showAlert(header, subheader) {
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      buttons: ['OK']
    });
    await alert.present();
  }

  logout() {
    this.authSvc.logoutUser()
      .then(res => {
        console.log(res);
        this.router.navigateByUrl('/login', { replaceUrl: true });
      })
      .catch(error => {
        console.log(error);
      })
  }

  goHome() {
    this.router.navigateByUrl('/inicio', { replaceUrl: true });
  }

}
