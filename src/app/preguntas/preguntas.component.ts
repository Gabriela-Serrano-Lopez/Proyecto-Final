import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})

export class PreguntasComponent implements OnInit {
  panelOpenState = false;
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

    this.datos = "Preguntas Frecuentes...";
    this.datos += "¿Qué productos puedo encontrar?..";
    this.datos += "Esta empresa proporciona una variedad de servicios de infraestructura tales como bienes alimenticios de máxima calidad y potencial inigualable, y productos de utilidad en su vida cotidiana..";
    this.datos += "¿Por qué E-Tienda es tan exitoso?..";
    this.datos += "La obsesión por el cliente. La clave principal del éxito de E-Tienda está en el cliente, que se encuentra en el centro de todas las decisiones. ... Así, sólo el proceso desde que el cliente hace su pedido hasta que lo recibe es analizado por más de 300 métricas distintas..";
    this.datos += "¿Qué tipo de proveedores tiene E-tienda?.."
    this.datos += "En E-tienda tenemos relación con diversos proveedores los cuales nos aseguran estar innovando continuamente para ofrecer la mejor gama y selección de productos manteniendo estándares de calidad..";
    this.datos += "¿Qué beneficios tengo al ser cliente de E-tienda?..";
    this.datos += "Serás el primero en enterarte sobre las nuevos productos así como recibir promociones y descuentos constantemente para la tienda en línea..";
    this.datos += "¿Qué seguridad tienen mi compras por E-Tienda?..";
    this.datos += "E-Tienda  protege todos tus datos personales y de pago con los estándares de seguridad más altos de la industria ya que contamos con herramientas que nos ayudan a detectar y evitar fraudes en tiempo real..";
    this.datos += "¿Puedo devolver un producto comprado en E-Tienda?..";
    this.datos += "Si, las devoluciones estarán sujetas a los lineamientos, términos y condiciones de cada producto. Esto se debe revisar en el detalle y reseña de cada producto dentro del catálogo de E-Tienda..";
  }

  ngOnInit(): void {
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
}
