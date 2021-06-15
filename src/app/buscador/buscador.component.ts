import { Component, OnInit } from '@angular/core';
import { ArticulosService, Articulo } from '../articulos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  nombre:string;
  indice:number;
  miarticulo:Articulo;

  constructor(private articulosService:ArticulosService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
 
      this.nombre=params['nombre'];
      this.indice=this.articulosService.buscarArt(this.nombre);
      console.log(this.indice);
      console.log("NOMBREEEE",this.nombre);
      if(this.indice != -1){
        this.miarticulo=this.articulosService.getArt(this.indice);
      }
    });
  }

  ngOnInit(): void {
   
  }

}