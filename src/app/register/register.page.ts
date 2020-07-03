import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { User } from './../shared/classes/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(private authSvc: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
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
      console.log('Success on register!');
      this.router.navigateByUrl('/');
    }
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

}
