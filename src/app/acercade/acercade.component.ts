import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
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
    this.datos += "¿Quiénes Somos?..¿Qué es E-Tienda?.Somos la tienda online de abarrotes líder de América Latina";
    this.datos += "y nuestro propósito es  democratizar el comercio y el dinero para impactar en el desarrollo de la región...";
    this.datos += "Nacimos en 1999 y actualmente operamos en 18 países de la región. En pocos años, logramos convertirnos en la ";
    this.datos += "séptima plataforma de comercio electrónico del mundo...";
    this.datos += " En 2017 lanzamos E-Crédito, orientada a democratizar ";
    this.datos += "el acceso al crédito y potenciar la inclusión financiera. Y, en 2019, celebramos 20 años de vida con una ";
    this.datos += "fuerte apuesta a seguir democratizando el comercio y las finanzas...";
    this.datos += "Los compradores sólo deben registrarse en el sitio, buscar los productos o servicios que necesitan y hacer clic en el botón comprar... ";
    this.datos += "SIGUENOS EN NUESTRAS REDES SOCIALES";

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
