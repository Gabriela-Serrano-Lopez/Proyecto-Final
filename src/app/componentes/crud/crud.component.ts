import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../modelos/Producto';
import { stringify } from 'querystring';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  mostrarAgregar:boolean=false;
  mostrarEliminar:boolean=false;
  mostrarActualizar:boolean=false;
  banderaAct:boolean=false;
  fs;
  altas;borrar;actu;actualizar1;
  p;
  productos: Producto [];

  constructor(public router:Router, public formBuilder:FormBuilder, public peticion:ProductosService) {
    this.altas=formBuilder.group({
      cantidad:['',Validators.required],
      des:['',Validators.required],
      fecha:['',Validators.required],
      nombre:['',Validators.required],
      precio:['',Validators.required]  
    });
    this.borrar=formBuilder.group({
      eliminar:['',Validators.required]
    })
    this.actu=formBuilder.group({
      actualizar:['',Validators.required]
    })
    this.actualizar1=formBuilder.group({
      cantidad:['',Validators.required],
      des:['',Validators.required],
      fecha:['',Validators.required],
      nombre:['',Validators.required],
      precio:['',Validators.required]  
    });
    this.peticion.getProductos()
    .snapshotChanges()
    .subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      console.log("entre");
      this.productos = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        //a["nom"]=item.nom;
        console.log(a);

         this.productos.push(a as Producto);
      })

      for (this.p of this.productos) {
        //console.log(this.p);
      }
      console.log(this.productos);
    });
   }

  ngOnInit(): void {
    
  }

  agregar():void{
    this.mostrarAgregar=true;
    this.mostrarEliminar=false;
    this.mostrarActualizar=false;
    this.banderaAct=false;
  }
  altasSubmit():void{
    if (this.altas.valid) {
      
      console.log(this.altas.value);
      let a=this.altas.value;
      
      console.log(a.nombre);
      this.peticion.addProducto(a.cantidad,a.des,a.nombre,a.precio,a.fecha);
      this.altas.reset();
    }
    else {
      alert ( "Llena todos los campos porfavor ");
    }
  }
  eliminar():void{
    this.mostrarEliminar=true;
    this.mostrarActualizar=false;
    this.mostrarAgregar=false;
    this.banderaAct=false;
  }
  eliminarSubmit(){
    if(this.borrar.valid){
      console.log(this.borrar.value.eliminar);
      this.peticion.eraseProducto(this.borrar.value.eliminar);
      this.borrar.reset();
    }
    else{
      alert("Llena el campo");
    }
  }
  actualizar():void{
    this.mostrarActualizar=true;
    this.mostrarEliminar=false;
    this.mostrarAgregar=false;
    this.banderaAct=false;
  }
  actualizarSubmit(){
    if(this.actu.valid){
      console.log(this.actu);
      let id=stringify(this.actu.value.actualizar);
      for(let c of this.productos){
        console.log(c.nombre);
        console.log(id);
        if( this.actu.value.actualizar == c.nombre){
          
          alert("Usuario encontrado");
          this.banderaAct=true;
          this.actualizar1.value.cantidad=c.cantidad;
          this.actualizar1.value.des=c.des;
          this.actualizar1.value.fecha=c.fecha;
          this.actualizar1.value.nombre=c.nombre;
          this.actualizar1.value.precio=c.precio;

        }
        else{
          //alert("Usuario no existe");
        }
      }

    }
  }

  actualizar1Submit(){
    if(this.actualizar1.valid){
      let a=this.actualizar1.value;
      
      console.log(a.nombre);
      this.peticion.updateProducto(a.cantidad,a.des,a.nombre,a.precio,a.fecha,this.actu.value.actualizar);
      this.actualizar1.reset();
    }
      
  }
}
