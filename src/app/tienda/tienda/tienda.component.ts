import { Component, OnInit } from '@angular/core';
import { ArticulosService, Articulo } from '../../articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  misarticulos: Articulo[] = [];
  constructor(public miservicio: ArticulosService, public router:Router) { }

  ngOnInit(): void {
    this.misarticulos= this.miservicio.getArts();
    console.log(this.misarticulos);
  }

  responsive = true;
  cols = 1;

}
