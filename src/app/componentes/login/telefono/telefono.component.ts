import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/modelos/Usuario';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2'
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css']
})
export class TelefonoComponent implements OnInit {

  @ViewChild('div_form') form: ElementRef;
  @ViewChild('loader') loader: ElementRef;
  @ViewChild('btnSiguiente') btnSiguiente: ElementRef;
  @ViewChild('paso1') paso1: ElementRef;
  @ViewChild('paso2') paso2: ElementRef;

  usuario: Usuario;
  windowRef: any;

  registerForm = new FormGroup({
    lada: new FormControl(''),
    telefono: new FormControl(''),
    codigo: new FormControl('')
  });

  isVerificandoCodigo: boolean = false;

  constructor(private win: AuthService, private db: AngularFireDatabase, private router: Router) { }

  ngOnInit(): void {
    var json = JSON.parse(localStorage.getItem('usuario'));
    if (json != undefined) {
      this.usuario = new Usuario();
      this.usuario.nombre = json.nombre;
      this.usuario.apellidos = json.apellidos;
      this.usuario.id = json.id;
      this.usuario.correo = json.correo;
    }
    

    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
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
    this.btnSiguiente.nativeElement.innerHTML = "Registrar";
    this.btnSiguiente.nativeElement.disabled = false;
    //this.input.nativeElement.disabled = true;
  }

  clickEnviarCodigo() {
    if (this.isVerificandoCodigo) {
      this.submitCodigo();
      return;
    }

    this.loadingAnimation();

    var telefono = '+52' + this.registerForm.value.telefono;
    //var telefono = "+524751080851";
    const appVerifier = this.windowRef.recaptchaVerifier;

    var esto = this;

    firebase.auth().signInWithPhoneNumber(telefono, appVerifier)
        .then(result => {
          console.log(result);
          this.windowRef.confirmationResult = result;
          esto.showInputCode(result);
        })
        .catch(error => {
          console.log(error)
          esto.finishLoadingAnimation();
          if (error.code === 'auth/too-many-requests') {
            Swal.fire({
              title: '¡Oops!',
              text: 'Has realizado demasiados intentos. Intenta más tarde.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            })
          }
        });
  }

  showInputCode(result) {
    if (result.verificationId !== undefined) {
      this.finishLoadingAnimation();
      this.paso1.nativeElement.style = "display: none";
      this.paso2.nativeElement.style = "display: block";
      this.btnSiguiente.nativeElement.innerHTML = "Verificar";
      this.isVerificandoCodigo = true;
    }
  }

  submitCodigo() {
    this.loadingAnimation();
    
    var codigo = this.registerForm.value.codigo + "";
    console.log("Codigo: " + codigo);

    var esto = this;
    
    this.windowRef.confirmationResult
        .confirm(codigo)
        .then(result => {
          console.log("CORRECTO----------------");
          console.log(result.user);

          esto.usuario.telefono = result.user.phoneNumber;
          esto.db.list('usuarios/' + esto.usuario.id).set("telefono", result.user.phoneNumber);
      
          Swal.fire({
            icon: 'success',
            title: '¡Correcto!',
            showConfirmButton: false,
            timer: 1500
          });
          
          this.router.navigate(['/home']);
        })
        .catch(error => {
          Swal.fire({
            title: '¡Oops!',
            text: 'El código es incorrecto',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        });//auth/missing-verification-code
  }

}
