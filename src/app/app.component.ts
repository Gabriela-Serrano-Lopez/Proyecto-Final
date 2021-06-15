import { Component } from '@angular/core';
import { Usuario } from './modelos/Usuario';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth/services/auth.service';
import { ProductosService } from './services/productos.service';
import { Producto } from './modelos/Producto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, ProductosService]
})

export class AppComponent {

  constructor(private authSvc: AuthService, private fs: ProductosService) {

  }

  registerForm = new FormGroup({
    correo: new FormControl(''),
    pass: new FormControl('')
  });

  login() {
    var correo = this.registerForm.value.correo;
    var pass = this.registerForm.value.pass;
    console.log(correo);
    console.log(pass);

    this.authSvc.fireLogin(correo, pass);
  }

  register() {
    var correo = this.registerForm.value.correo;
    var pass = this.registerForm.value.pass;
    console.log(correo);
    console.log(pass);

    this.authSvc.fireRegister(correo, pass);
  }

  // addProducto(nombre: string) {
  //   this.fs.addProducto(nombre, 3);
  // }

  getProductos() {
    let s = this.fs.getProductos();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)

      let productos = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        console.log(a);

         productos.push(a as Producto);
      })

      for (let p in productos) {
        console.log(p);
      }
    });
  }
}
