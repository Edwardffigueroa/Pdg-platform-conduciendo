import { Component, OnInit, Input } from '@angular/core';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import { Clases } from '../clases';


@Component({
  selector: 'app-senalizacion-demarcacion',
  templateUrl: './senalizacion-demarcacion.component.html',
  styleUrls: ['./senalizacion-demarcacion.component.css']
})
export class SenalizacionDemarcacionComponent implements OnInit {

  private p5;

  @Input() clase: Clases;

  constructor() { }

  ngOnInit() {
  }

  empezar(){

    this.createCanvas();

  }

  private createCanvas() {

    this.p5 = new p5(this.sketch);
  }

  sketch = (p:any) =>{

          //variables
          var canvasDiv = document.getElementById('canvasP5');
          var canvasW = canvasDiv.clientWidth;
          var canvasH = canvasDiv.clientHeight;
          var btnStart;

    var explicacionSenales;
    var videopreguntaUno;
    var videoRespuestaUno;

    var controlsUnoPregunta;
    var controlsDosPregunta;
    var controlsTresPregunta;
    var controlsCuatroPregunta;
    var controlsCincoPregunta;
    var controlsSeisPregunta;
    

    p.setup = () =>{

      btnStart = p.select('.btn-start');
      btnStart.hide();

      controlsUnoPregunta = p.select('.containerControlUno');
      controlsUnoPregunta.hide();
      controlsDosPregunta = p.select('.containerControlDos');
      controlsDosPregunta.hide();
      controlsTresPregunta = p.select('.containerControlTres');
      controlsTresPregunta.hide();
      controlsCuatroPregunta = p.select('.containerControlCuatro');
      controlsCuatroPregunta.hide();
      controlsCincoPregunta = p.select('.containerControlCinco');
      controlsCincoPregunta.hide();
      controlsSeisPregunta = p.select('.containerControlSeis');
      controlsSeisPregunta.hide();

      explicacionSenalesVideo();

    }

    function explicacionSenalesVideo(){
     // explicacionSenales = p.createVideo('src/assets/senales/senalesdetransito.mov');
     explicacionSenales = p.createVideo('src/assets/Actividadsenales/Pregunta1.mov');
      explicacionSenales.parent('canvasP5video');
      explicacionSenales.size(canvasW, canvasH);
      explicacionSenales.speed(2);//comentar despues
      explicacionSenales.play();

      explicacionSenales.onended(preguntaUno);
    }

    function preguntaUno(){

      explicacionSenales.hide();

      videopreguntaUno = p.createVideo('src/assets/Actividadsenales/Pregunta1.mov');
      videopreguntaUno.parent('canvasP5video');
      videopreguntaUno.size(canvasW, canvasH);
      videopreguntaUno.speed(2);//comentar despues
      videopreguntaUno.play();

      videopreguntaUno.onended(controlsPreguntaUno);
      
    }
    
    function controlsPreguntaUno(){

      controlsUnoPregunta.show();

      var preguntaUnoA = p.select('.preguntaUnoA');
      var preguntaUnoB = p.select('.preguntaUnoB');
      var preguntaUnoC = p.select('.preguntaUnoC');
      var preguntaUnoD = p.select('.preguntaUnoD');
      
      preguntaUnoA.mousePressed(respuestaIncorrecta);
      preguntaUnoB.mousePressed(respuestaCorrecta);
      preguntaUnoC.mousePressed(respuestaIncorrecta);
      preguntaUnoD.mousePressed(respuestaIncorrecta);

      function respuestaCorrecta(){

        console.log("muy bien");
        videopreguntaUno.hide();
        controlsUnoPregunta.hide();

        videoRespuestaUno = p.createVideo('src/assets/Actividadsenales/Respuesta1.mov');
      
        videoRespuestaUno.parent('canvasP5video');
        videoRespuestaUno.size(canvasW, canvasH);
        videoRespuestaUno.speed(2);//comentar despues
        videoRespuestaUno.play();

        videoRespuestaUno.onended(preguntaDos);
        
      }

      function respuestaIncorrecta(){

        videoRespuestaUno = p.createVideo('src/assets/Actividadsenales/Respuesta1.mov');
      
        videoRespuestaUno.parent('canvasP5video');
        videoRespuestaUno.size(canvasW, canvasH);
        videoRespuestaUno.speed(2);//comentar despues
        videoRespuestaUno.play();

        videoRespuestaUno.onended(preguntaDos);
       
      }

    }

    function preguntaDos(){


    }

    function controlsPreguntaDos(){

    }

  }

}
