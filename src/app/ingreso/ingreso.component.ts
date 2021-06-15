import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup , FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  hide = true;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes llenar el campo';
    }

    return this.email.hasError('email') ? 'No es un email valido' : '';
  }

}
