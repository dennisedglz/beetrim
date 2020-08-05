import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { User } from './../shared/classes/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioClienteDto } from '../dto/PerfilDto';
import { RegistroService } from '../services/registro.service';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  email: string = '';
  password: string = '';
  user: User = new User();

  perfilUsuario: UsuarioClienteDto = {
    userAuthID: '',
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    correo: '',
    telefono: '',
    foto: '',
    tipoUsuario: '',
    verificado: true
  };

  constructor(
    private authSvc: AuthService,
    private router: Router, 
    private registerSvc: RegistroService,
    private appData: AppDataService
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      nombre: new FormControl(null, [Validators.required]),
      apellidos: new FormControl(null, [Validators.required]),
      telefono: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.user.email = this.registerForm.get('email').value;
    this.user.password = this.registerForm.get('password').value;
    this.register();
  }

  async register() {
    const user = await this.authSvc.onRegister(this.user);
    if (user) {
      this.perfilUsuario.userAuthID = user.user.uid;
      this.perfilUsuario.nombre = this.registerForm.get('nombre').value;
      this.perfilUsuario.apellidos = this.registerForm.get('apellidos').value;
      this.perfilUsuario.correo = this.user.email;
      this.perfilUsuario.telefono = this.registerForm.get('telefono').value;
      this.perfilUsuario.tipoUsuario = 'cliente';
      this.registerSvc.addNuevoUsuario(this.perfilUsuario.userAuthID, this.perfilUsuario).then( res => {
        console.log(res);
        this.appData.user = this.perfilUsuario;
        this.router.navigateByUrl('/');
      }, err => {
        console.log(err);
      })
    }
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

}
