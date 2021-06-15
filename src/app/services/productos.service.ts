import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/Producto';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable()
export class ProductosService {

  items: AngularFireList<any[]>;

  constructor(public db: AngularFireDatabase) { 
    this.items = db.list('promociones/prox');
  }

  getProductos(): AngularFireList<any> {
    this.items = this.db.list('promociones/prox');
    return this.items;
  }

  addProducto(cantidad,des,nombre,precio,fecha) {
    let prod = new Producto();
    prod.cantidad=cantidad;
    prod.des= des;
    prod.fecha= fecha;
    prod.nombre = nombre;
    prod.precio = precio;
    console.log(prod.nombre+'servicio');
    this.db.list('promociones/prox/'+prod.nombre).set("nombre", prod.nombre);
    this.db.list('promociones/prox/'+prod.nombre).set("cantidad", prod.cantidad);
    this.db.list('promociones/prox/'+prod.nombre).set("des", prod.des);
    this.db.list('promociones/prox/'+prod.nombre).set("fecha", prod.fecha);
    this.db.list('promociones/prox/'+prod.nombre).set("precio", prod.precio);
  }

  eraseProducto(nom:string){
    console.log("entre a eliminar");
    this.db.list('promociones/prox').remove(nom);
  }

  updateProducto(cantidad,des,nombre,precio,fecha,id):void{
    let prod = new Producto();
    prod.cantidad=cantidad;
    prod.des= des;
    prod.fecha= fecha;
    prod.nombre = nombre;
    prod.precio = precio;
    console.log(prod.nombre+'servicio');
    this.db.list('promociones/prox/'+prod.nombre).update(id,{
      nombre:prod.nombre,
      cantidad:prod.cantidad,
      des:prod.des,
      fecha:prod.fecha,
      precio:prod.precio
    });
  }
}
