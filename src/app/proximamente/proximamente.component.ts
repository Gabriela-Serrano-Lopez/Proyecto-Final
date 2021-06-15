import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-proximamente',
  templateUrl: './proximamente.component.html',
  styleUrls: ['./proximamente.component.css']
})

export class ProximamenteComponent implements OnInit {
  prom:any[] = [];
  
  constructor(private db:AngularFireDatabase) {
    let s = this.db.list('promociones/prox').valueChanges();
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
