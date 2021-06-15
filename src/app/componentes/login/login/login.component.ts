import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from 'src/app/modelos/Usuario';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('div_form') form: ElementRef;
  @ViewChild('inputCorreo') input: ElementRef;
  @ViewChild('inputPassword') inputPassword: ElementRef;
  @ViewChild('btnSiguiente') btnSiguiente: ElementRef;
  @ViewChild('loader') loader: ElementRef;

  @ViewChild('divCorreo') divCorreo: ElementRef;
  @ViewChild('divPassword') divPassword: ElementRef;
  @ViewChild('divPaso1') divPaso1: ElementRef;
  @ViewChild('divPaso2') divPaso2: ElementRef;

  escribiendoPass = false;

  constructor(
    private authSvc: AuthService, private db: AngularFireDatabase, private router: Router
  ) { }

  ngOnInit(): void {
  }

  loadingAnimation() {
    this.form.nativeElement.style = "background-color: #EFEFEF";
    this.loader.nativeElement.style = "display: block;";
    this.btnSiguiente.nativeElement.innerHTML = "Cargando...";
    this.btnSiguiente.nativeElement.disabled = true;
    //this.input.nativeElement.disabled = true;
  }

  finishLoadingAnimation() {
    this.form.nativeElement.style = "background-color: transparent";
    this.loader.nativeElement.style = "display: none;";
    if (this.escribiendoPass) {
      this.btnSiguiente.nativeElement.innerHTML = "Iniciar sesión";
    } else {
      this.btnSiguiente.nativeElement.innerHTML = "Registrar";
    }

    this.btnSiguiente.nativeElement.disabled = false;
    //this.input.nativeElement.disabled = true;
  }

  async clickSiguiente() {
    if (this.escribiendoPass) {
      this.checkLogin();
      return;
    }
    //Validamos todos los campos del formulario
    if (!this.validar()) {
      return;
    }

    this.loadingAnimation();
    var correo = this.input.nativeElement.value.trim();

    var esto = this;

    await this.authSvc.fireLogin(correo, '123123').then(function (result) {
      console.log("CORRECTO:");
      console.log(result);

      esto.loginSuccess(result);
    })
      .catch(function (err) {
        console.log("ERROR:");
        console.log(err);

        var error = "";
        if (err.code === 'auth/invalid-email') {
          error = "Ingresa un correo válido";
        } else if (err.code === 'auth/user-not-found') {
          error = "Este correo no está registrado";
        } else if (err.code === 'auth/too-many-requests') {
          error = "Demasiados intentos. Vuelva a intentarlo más tarde";
        } else if (err.code === 'auth/wrong-password') {
          esto.showPassword();
          return;
        }

        Swal.fire({
          title: '¡Oops!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })

        esto.finishLoadingAnimation();
      });
  }

  async showPassword() {
    this.escribiendoPass = true;
    this.finishLoadingAnimation();

    this.divCorreo.nativeElement.style = "display: none";
    this.divPassword.nativeElement.style = "display: block;";

    this.divPaso1.nativeElement.style = "display: none;";
    this.divPaso2.nativeElement.style = "display: block;";
  }

  async checkLogin() {
    //Validamos todos los campos del formulario
    if (!this.validar()) {
      return;
    }

    this.loadingAnimation();
    var correo = this.input.nativeElement.value.trim();
    var pass = this.inputPassword.nativeElement.value.trim();

    var esto = this;

    await this.authSvc.fireLogin(correo, pass).then(function (result) {
      console.log("CORRECTO:");
      console.log(result);

      esto.loginSuccess(result);
    })
      .catch(function (err) {
        console.log("ERROR:");
        console.log(err);

        var error = "";
        if (err.code === 'auth/invalid-email') {
          error = "Ingresa un correo válido";
        } else if (err.code === 'auth/user-not-found') {
          error = "Este correo no está registrado";
        } else if (err.code === 'auth/too-many-requests') {
          error = "Demasiados intentos. Vuelva a intentarlo más tarde";
        } else if (err.code === 'auth/wrong-password') {
          error = "Contraseña incorrecta";
        }

        Swal.fire({
          title: '¡Oops!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })

        esto.finishLoadingAnimation();
      });
  }

  validar(): boolean {
    if (this.escribiendoPass) {
      var pass = this.inputPassword.nativeElement.value.trim();

      if (pass === '') {
        this.sendError("Por favor, ingresa tu contraseña");
        return false;
      }
    } else {
      var correo = this.input.nativeElement.value.trim();

      if (correo === '') {
        this.sendError("Por favor, ingresa tu correo");
        return false;
      }
    }


    return true;
  }

  loginSuccess(result) {
    var id = result.user.uid;


    let s = this.db.list('usuarios/' + id).valueChanges();
    let usuario = new Usuario();

    s.forEach(item => {
      console.log(item);

      usuario.nombre = item[3].toString();
      usuario.apellidos = item[0].toString();
      usuario.correo = item[1].toString();
      usuario.id = item[2].toString();

      localStorage.setItem('usuario', JSON.stringify(usuario));

      if (item.length < 5) {//Si no tiene un teléfono
        this.router.navigate(['/verificar-telefono']);
      } else {
        //location.reload();
        this.router.navigate(['/']);
      }

      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido ' + usuario.nombre + '!',
        showConfirmButton: false,
        timer: 1500
      })

    });

    window.location.reload();
  }



  public sendError(msg: string) {
    Swal.fire({
      title: '¡Oops!',
      text: msg,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }

}
