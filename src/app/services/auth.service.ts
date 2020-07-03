import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from "./../shared/classes/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
   }

   // Login with Firebase
   async onLogin(user: User) {
     try {
       return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
     } catch (error) {
      console.error('Error login ', error);
     }
   }

   // Register with Firebase
   async onRegister(user: User) {
     console.log('OnRegister', user);
     try {
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
     } catch (error) {
      console.error('Error register ', error);
     }
   }
}
