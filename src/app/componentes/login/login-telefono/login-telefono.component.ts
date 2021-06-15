import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-login-telefono',
  templateUrl: './login-telefono.component.html',
  styleUrls: ['./login-telefono.component.css']
})
export class LoginTelefonoComponent implements OnInit {

  windowRef: any;
  user: any;

  constructor(private win: AuthService) { }

  ngOnInit(): void {
    this.windowRef = this.win.windowRef;
     this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode(telefono: string) {
    const appVerifier = this.windowRef.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(telefono, appVerifier)
        .then(result => {
          this.windowRef.confirmationResult = result;
        })
        .catch(error => console.log(error));
  }

  verifyLoginCode(code: string) {
    this.windowRef.confirmationResult
        .confirm(code)
        .then(result => {
          this.user = result.user;
        })
        .catch(error => console.log(error, "Incorrect code enteder?"));

  }

}
