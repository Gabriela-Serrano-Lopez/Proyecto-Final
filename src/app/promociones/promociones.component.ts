import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  prom:any[] = [];

  constructor(private db:AngularFireDatabase) {
    let s = this.db.list('promociones/prom').valueChanges();
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
