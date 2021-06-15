import { Component, OnInit } from '@angular/core';
import { ArticulosService , Articulo } from '../articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
misarticulos: Articulo[] = [];

  constructor(public miservicio: ArticulosService, public router:Router) {
    console.log("constructor de ArticulosComponent");
  }
  ngOnInit(): void {
    console.log("metodo ngOnInit de ArticulosComponent");
    this.misarticulos = this.miservicio.getArts();
    console.log(this.misarticulos);
  }
}
