import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { User } from './../shared/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  user: User = new User();

  constructor(private authSvc: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });

    this.loginForm.get('email').setValue('dennise.dglz@gmail.com');
    this.loginForm.get('password').setValue('123456');
  }

  ionViewDidLoad() {
  }

  onSubmit() {
    this.user.email = this.loginForm.get('email').value;
    this.user.password = this.loginForm.get('password').value;
    this.login();
  }

  async login() {
    const user = await this.authSvc.onLogin(this.user);
    console.log(user);
    if(user) {
      this.router.navigateByUrl('/agendar');
    }
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
