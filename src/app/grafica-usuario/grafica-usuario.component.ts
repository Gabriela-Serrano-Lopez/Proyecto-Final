import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-grafica-usuario',
  templateUrl: './grafica-usuario.component.html',
  styleUrls: ['./grafica-usuario.component.css']
})
export class GraficaUsuarioComponent implements OnInit {
  prom:any[] = [];
  
  constructor(private db:AngularFireDatabase) {
    let s = this.db.list('ventas/hora').valueChanges();
    s.forEach( item => {
      item.forEach(producto => {
        var json = JSON.parse(JSON.stringify(producto));
        this.prom.push(json);
      });
    });
  }

  ngOnInit(): void {
  }

}
