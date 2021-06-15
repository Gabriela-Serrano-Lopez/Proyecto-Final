import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  loginForm: FormGroup;
  form;
  //Mensajes de error al validar
  error_messages = {
    'fname': [
      { type: 'required', message: 'Nombre requerido' },
    ],

    'lname': [
      { type: 'required', message: 'Apellido Requerido' }
    ],

    'email': [
      { type: 'required', message: 'Email requerido' },
      { type: 'minlength', message: 'Email muy corto.' },
      { type: 'maxlength', message: 'Email muy largo.' },
      { type: 'required', message: 'Introducir correo valido.' }
    ],

    'password': [
      { type: 'required', message: 'Contraseña requerida.' },
      { type: 'minlength', message: 'Contraseña muy corta.' },
      { type: 'maxlength', message: 'Contraseña muy larga' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'Confirmar contraseña requerida' },
      { type: 'minlength', message: 'Contraseña muy corta' },
      { type: 'maxlength', message: 'Contraseña muy larga' }
    ],
  }

   
  constructor(public formBuilder: FormBuilder){
    
    //Validaciones
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([Validators.required])),
      lname: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),

      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),

    }, { 
      validators: this.password.bind(this)
    });
  }

  ngOnInit() {
  }

  //Checa que las dos contraseñas sean las correctas
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      Swal.fire('¡Muy Bien!', 'Tu cuenta fue creada con éxito', 'success')
      
    }
    else{
       Swal.fire('¡Error!', 'Debes llenar todos los campos o checar que todos estén bien', 'error')
    }
  }

}

