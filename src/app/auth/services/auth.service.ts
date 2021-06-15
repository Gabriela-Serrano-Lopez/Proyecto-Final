import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import Swal from 'sweetalert2'

@Injectable()
export class AuthService {

  public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  get windowRef() {
    return window;
  }

  async fireLogin(correo: string, pass: string) {
    return await this.afAuth.signInWithEmailAndPassword(correo, pass);
  }

  async fireRegister(correo: string, pass: string) {
    return await this.afAuth.createUserWithEmailAndPassword(correo, pass);
  }

  async logout() {
    await this.afAuth.signOut();
  }

  getCurrentUser() {
    //return this.afAuth.authState.pipe(first()).toPromise();
  }
}
