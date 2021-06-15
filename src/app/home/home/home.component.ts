import { Component, OnInit } from '@angular/core';
import { ArticulosService, Articulo } from '../../articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  misarticulos: Articulo[] = [];
  img: string;
  misbanner: banner[] = [
    {
      img: "assets/banner1.png",

    },
    {
      img: "assets/banner2.png",

    },
    {
      img: "assets/banner3.png",
    }
  ];
  constructor(public miservicio: ArticulosService, public router: Router) {
    console.log("constructor de home");
  }

  ngOnInit(): void {

    console.log("metodo ngOnInit de articulosComponent");
    this.misarticulos = this.miservicio.getArts();
    console.log(this.misarticulos);
  }

  responsive = true;
  cols = 1;

}

export interface banner {
  img: string;
}

