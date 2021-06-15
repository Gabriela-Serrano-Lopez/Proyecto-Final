import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import Speech from 'speak-tts';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  speech: any;
  datos: string;
  
  constructor() {
    this.speech = new Speech();
    if (this.speech.hasBrowserSupport()) {
      // returns a boolean
      console.log('speech synthesis supported');
      this.speech.init({
          volume: 1,
          lang: 'es-MX',
          rate: 1,
          pitch: 1,
          voice: 'Microsoft Sabina Desktop - Spanish (Mexico)',
          splitSentences: true
        });
    }
    this.datos += "E-Tienda México – Telefono 01800 y medios de contacto...";
    this.datos += "E-Tienda, es la empresa de comercio electrónico que lidera el sector en Latinoamérica, la cual, presta este servicio desde 1999, teniendo presencia en casi dos decenas de naciones en el continente, entre ellos México. Actualmente, son la séptima tienda web a escala global..";
    this.datos += "El usuario, podrá beneficiarse de las bondades de usar no solo E-Tienda, sino E-Pago, E-Shops, E-Tienda Publicidad, así como E-Envíos. En esta tienda web, buscan brindar soluciones para que empresas e individuos decidan comprar bienes en Internet..";
    this.datos += "Telefono 01810 E-Tienda Mexico..";
    this.datos += "E-Tienda cuenta con líneas 01810 que te permiten comunicarte con ellos en todo momento..";
    this.datos += "01 800 105 52 100..";
    this.datos += "01 800 105 52 101..";
    this.datos += "01 800 105 52 102..";
    this.datos += "01 800 105 52 108..";
    this.datos += "Si deseas llamar desde el extranjero solo debes marcar al siguiente número:   +52 55 4973 7300..";
    this.datos += "Medios de contacto por Internet de E-Tienda  Al ser una plataforma online no pueden faltar los canales a través de Internet. Es por eso que te quiero  compartir dichos canales..";
    this.datos += "La página web de E-Tienda México   https://www.E-Tienda.com.mx/...";
    this.datos += "En la web site de E-Tienda México, hay una sección denominada “Ayuda”, en la que el usuario podrá  contactar con esta tienda, para efectos de comprar, vender, y un centro de seguridad. Básicamente, en cualquiera de estas opciones, al entrar podrás saber todo sobre hacer compras y ventas, así como la manera en que puedes configurar tu cuenta para evitarte problemas a futuro..";
    this.datos += "Incluso, recomiendan hacer uso del sistema E- Pago al momento de comprar, porque así podrán respaldar el 100% del dinero en caso de algún problema con su compra..";
    this.datos += "Por eso, deben asociar el número para recibir un código con el que podrán hacer una nueva clave en caso de cualquier imprevisto. De esta forma, nadie con intenciones inescrupulosas podrán abrir tu cuenta..";
    this.datos += "En esta sección, también recomiendan a los vendedores el uso de E- Pago, porque siempre monitorean este sistema..";

  }

  start(){
    console.log(this.datos);
    this.speech.speak({ 
      text: this.datos,
    });
  }

  pause(){
    this.speech.pause();
    console.log("f");
  }

  resume(){
    this.speech.resume();
    console.log("f1");
  }

  cancelar(){
    this.speech.cancel();
    console.log("f3");
  }
  
  ngOnInit(): void {
  }

  enviado(){
    Swal.fire({
      title: '¡Muy Bien!',
      text: '¡Tu Correo ha sido enviado exitosamente!',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  }

}


