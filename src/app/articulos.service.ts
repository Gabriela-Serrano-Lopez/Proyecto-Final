
import { Injectable } from '@angular/core';
import { style } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {

  private articulos:Articulo[] = [
    {
      nombre: "Coca-cola",
      id: 1,
      img: "assets/1.png",
      descripcion:"Es un artículo para acompañar en todas tus comidas.",
      precio: 18
    },  
    {
      nombre: "Doritos",
      id: 2,
      img: "assets/2.png",
      descripcion:"La botana perfecta para disfrutar con amigos.",
      precio: 15
    },

    {
      nombre: "Agua Natural",
      id: 3,
      img: "assets/3.png",
      descripcion:"Agua natural para mantener hidratado tu cuerpo.",
      precio: 10
    },
  {
      nombre: "Tortillas",
      id: 4,
      img: "assets/tortillas.png",
      descripcion:"Para acompañar en todas tus comidas y guisados.",
      precio: 14
    },
    {
      nombre: "Agua de Sabor",
      id: 5,
      img: "assets/aguasabor.png",
      descripcion:"Agua de sabor para mantener hidratado tu cuerpo.",
      precio: 12
    },  

  ];
  constructor() {
    console.log("servicio listo para usarse");
   }

   getArts():Articulo[]{
       return this.articulos;
   }

   getArt(idx:number):Articulo{
    return this.articulos[idx];
   }

   buscarArt(nombreh:string):number{
    let index=this.articulos.findIndex(p=>p.nombre === nombreh);
    return index;
  }
}

export interface Articulo{
    nombre:string;
    id:number;
    img:string;
    descripcion:string;
    precio:number;
}


