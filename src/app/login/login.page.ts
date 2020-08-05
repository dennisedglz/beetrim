import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { User } from './../shared/classes/user';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  user: User = new User();

  constructor(
    private authSvc: AuthService, 
    private router: Router, 
    private appData: AppDataService,
    private registroSvc: RegistroService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });

    this.loginForm.get('email').setValue('dennise@gmail.com');
    this.loginForm.get('password').setValue('123456');
  }

  ionViewDidLoad() {
    console.log('Login loaded');
  }

  onSubmit() {
    this.user.email = this.loginForm.get('email').value;
    this.user.password = this.loginForm.get('password').value;
    this.login();
  }

  async login() { 
    const user = await this.authSvc.onLogin(this.user);
    if(user) {
      this.registroSvc.getUsuario(user.user.uid).subscribe((res) => {
        this.appData.user = res;
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }, (err) => {
        console.log('Error ', err);
      });
    }
  }

  goToRegister() {
    this.router.navigateByUrl('/register', { replaceUrl: true });
  }
}
