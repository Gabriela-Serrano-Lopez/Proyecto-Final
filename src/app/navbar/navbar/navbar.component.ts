import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  login:boolean = true;
  session: boolean = false;
  usu: any; 
  usulog:any;
  admin:boolean=false;
  constructor(private router:Router) {
    this.session=false;
    this.checkSession();
    
    if (localStorage.getItem("usuario") === null) { 
      this.login = false;
    }else{
      console.log("work");
      this.login = true;
    }
  }

  ngOnInit(): void {
  }

  buscar(nombre:string){
    this.router.navigate(['/buscador',nombre]);
  }
  checkSession(){
    
    if(localStorage.length == 0){
      this.session=false;
    }
    if(localStorage['usuario'] != null ){
      this.session=true;
      this.usu = JSON.parse(localStorage.getItem('usuario'));
      if(this.usu.correo == "rodrigoelmaps@gmail.com"){
        this.usulog = 'Admin';
        this.admin=true;

      }else{
        this.usulog = this.usu.nombre;
      }
    }
  }
}
