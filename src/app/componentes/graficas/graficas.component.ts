import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CrudComponent } from '../crud/crud.component';
import { Producto } from '../../modelos/Producto';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] }
  };
  public barChartLabels: Label[] = ['Tortillas', 'Queso', 'Chorizo', 'Refrescos', 'Sal', 'Azucar'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  productos: Producto [];
  
  public barChartData: ChartDataSets[] = [
    { data: [1,1,1,1,1,1], label: 'Mercancia' }
   // { data: [1,1,1,1,1,1], label: 'Junio' }
  ];
  arreglo:number[][]=[[1,2,3,4,5,6],[0,0,0,0,0,0]];
  nombres:string[]=[];
  constructor(public crudComponent:CrudComponent, public peticion:ProductosService) { 
    this.peticion.getProductos()
    .snapshotChanges()
    .subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      console.log("entre");
      this.productos = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        //a["nom"]=item.nom;
        //console.log(a);
         this.productos.push(a as Producto);
      })
      let i=0;
      for (let p of this.productos) {
        //console.log(this.p);
        this.arreglo[0][i]=p.cantidad;
        console.log(p.nombre);
        this.nombres[i]=p.nombre;
        i++;
      }
      this.barChartData[0].data = this.arreglo[0];
      this.barChartLabels=this.nombres;
      //console.log(this.productos);
    });
    
    
    }
    
    
        
      
    
  

  ngOnInit() {
  }
 
  
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  
}
