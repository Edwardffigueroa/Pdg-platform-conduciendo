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

    var videoPreguntaDos;
    var videoRespuestaDos;

    var videoPreguntaTres;
    var videoRespuestaTres;

    var videoPreguntaCuatro;
    var videoRespuestaCuatro;

    var videoPreguntaCinco;
    var videoRespuestaCinco;

    var videoPreguntaSeis;
    var videoRespuestaSeis;

    var controlsUnoPregunta;
    var controlsDosPregunta;
    var controlsTresPregunta;
    var controlsCuatroPregunta;
    var controlsCincoPregunta;
    var controlsSeisPregunta;

    var feedFinal;
    

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
      feedFinal = p.select('.feed-final-senales');
      feedFinal.hide();

      explicacionSenalesVideo();
      

    }

    function explicacionSenalesVideo(){
     explicacionSenales = p.createVideo('src/assets/senales/senalesdetransito.mp4');
    //  explicacionSenales = p.createVideo('src/assets/Actividadsenales/Pregunta1.mov');
      explicacionSenales.parent('canvasP5video');
      explicacionSenales.size(canvasW, canvasH);
      // explicacionSenales.speed(2);//comentar despues
      explicacionSenales.play();
      explicacionSenales.onended(preguntaUno);
    }

    function preguntaUno(){

      explicacionSenales.hide();

      videopreguntaUno = p.createVideo('src/assets/Actividadsenales/Pregunta1.mov');
      videopreguntaUno.parent('canvasP5video');
      videopreguntaUno.size(canvasW, canvasH);
      // videopreguntaUno.speed(2);//comentar despues
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
        // videoRespuestaUno.speed(2);//comentar despues
        videoRespuestaUno.play();

        videoRespuestaUno.onended(preguntaDos);
        
      }

      

      function respuestaIncorrecta(){

        console.log("muy bad");
        videopreguntaUno.hide();
        controlsUnoPregunta.hide();

        videoRespuestaUno = p.createVideo('src/assets/Actividadsenales/Respuesta1.mov');
      
        videoRespuestaUno.parent('canvasP5video');
        videoRespuestaUno.size(canvasW, canvasH);
        // videoRespuestaUno.speed(2);//comentar despues
        videoRespuestaUno.play();

        videoRespuestaUno.onended(preguntaDos);
       
      }

    }

    function preguntaDos(){

      videoRespuestaUno.hide();

      videoPreguntaDos = p.createVideo('src/assets/Actividadsenales/Pregunta2.mov');
      videoPreguntaDos.parent('canvasP5video');
      videoPreguntaDos.size(canvasW, canvasH);
      // videoPreguntaDos.speed(2);//comentar despues
      videoPreguntaDos.play();

      videoPreguntaDos.onended(controlsPreguntaDos);


    }

    function controlsPreguntaDos(){

      controlsDosPregunta.show();

      var preguntaUnoA = p.select('.preguntaDosA');
      var preguntaUnoB = p.select('.preguntaDosB');
      var preguntaUnoC = p.select('.preguntaDosC');
      var preguntaUnoD = p.select('.preguntaDosD');
      
      preguntaUnoA.mousePressed(respuestaCorrecta);
      preguntaUnoB.mousePressed(respuestaIncorrecta);
      preguntaUnoC.mousePressed(respuestaIncorrecta);
      preguntaUnoD.mousePressed(respuestaIncorrecta);

      function respuestaCorrecta(){

        console.log("muy bien");
        videoPreguntaDos.hide();
        controlsDosPregunta.hide();
      

        videoRespuestaDos = p.createVideo('src/assets/Actividadsenales/Respuesta2.mov');
      
        videoRespuestaDos.parent('canvasP5video');
        videoRespuestaDos.size(canvasW, canvasH);
        // videoRespuestaDos.speed(2);//comentar despues
        videoRespuestaDos.play();

        videoRespuestaDos.onended(preguntaTres);
        
      }

    
      function respuestaIncorrecta(){

        console.log("muy bad");
        videoPreguntaDos.hide();
        controlsDosPregunta.hide();

        videoRespuestaDos = p.createVideo('src/assets/Actividadsenales/Respuesta2.mov');
      
        videoRespuestaDos.parent('canvasP5video');
        videoRespuestaDos.size(canvasW, canvasH);
        // videoRespuestaDos.speed(2);//comentar despues
        videoRespuestaDos.play();

        videoRespuestaDos.onended(preguntaTres);
       
      }


    }

    function preguntaTres(){

      videoRespuestaDos.hide();

      videoPreguntaTres = p.createVideo('src/assets/Actividadsenales/Pregunta3.mov');
      videoPreguntaTres.parent('canvasP5video');
      videoPreguntaTres.size(canvasW, canvasH);
      // videoPreguntaTres.speed(2);//comentar despues
      videoPreguntaTres.play();

      videoPreguntaTres.onended(controlsPreguntaTres);


    }

    function controlsPreguntaTres(){

    
      controlsTresPregunta.show();

      var preguntaUnoA = p.select('.preguntaTresA');
      var preguntaUnoB = p.select('.preguntaTresB');
      var preguntaUnoC = p.select('.preguntaTresC');
      var preguntaUnoD = p.select('.preguntaTresD');
      
      preguntaUnoA.mousePressed(respuestaIncorrecta);
      preguntaUnoB.mousePressed(respuestaCorrecta);
      preguntaUnoC.mousePressed(respuestaIncorrecta);
      preguntaUnoD.mousePressed(respuestaIncorrecta);

      function respuestaCorrecta(){

        console.log("muy bien");
        videoPreguntaTres.hide();
        controlsTresPregunta.hide();
      

        videoRespuestaTres = p.createVideo('src/assets/Actividadsenales/Respuesta3.mov');
      
        videoRespuestaTres.parent('canvasP5video');
        videoRespuestaTres.size(canvasW, canvasH);
        // videoRespuestaTres.speed(2);//comentar despues
        videoRespuestaTres.play();

        videoRespuestaTres.onended(preguntaCuatro);
        
      }

    
      function respuestaIncorrecta(){

        console.log("muy bad");
        videoPreguntaTres.hide();
        controlsTresPregunta.hide();

        videoRespuestaTres = p.createVideo('src/assets/Actividadsenales/Respuesta3.mov');
      
        videoRespuestaTres.parent('canvasP5video');
        videoRespuestaTres.size(canvasW, canvasH);
        // videoRespuestaTres.speed(2);//comentar despues
        videoRespuestaTres.play();

        videoRespuestaTres.onended(preguntaCuatro);
       
      }


    }

    function preguntaCuatro(){

      videoRespuestaTres.hide();


      videoPreguntaCuatro = p.createVideo('src/assets/Actividadsenales/Pregunta4.mov');
      videoPreguntaCuatro.parent('canvasP5video');
      videoPreguntaCuatro.size(canvasW, canvasH);
      // videoPreguntaCuatro.speed(2);//comentar despues
      videoPreguntaCuatro.play();

      videoPreguntaCuatro.onended(controlsPreguntaCuatro);

    }

    function controlsPreguntaCuatro(){ 

      controlsCuatroPregunta.show();

      var preguntaUnoA = p.select('.preguntaCuatroA');
      var preguntaUnoB = p.select('.preguntaCuatroB');
      var preguntaUnoC = p.select('.preguntaCuatroC');
      var preguntaUnoD = p.select('.preguntaCuatroD');
      
      preguntaUnoA.mousePressed(respuestaIncorrecta);
      preguntaUnoB.mousePressed(respuestaIncorrecta);
      preguntaUnoC.mousePressed(respuestaCorrecta);
      preguntaUnoD.mousePressed(respuestaIncorrecta);

      function respuestaCorrecta(){

        console.log("muy bien");
        videoPreguntaCuatro.hide();
        controlsCuatroPregunta.hide();
      

        videoRespuestaCuatro = p.createVideo('src/assets/Actividadsenales/Respuesta4.mov');
      
        videoRespuestaCuatro.parent('canvasP5video');
        videoRespuestaCuatro.size(canvasW, canvasH);
        // videoRespuestaCuatro.speed(2);//comentar despues
        videoRespuestaCuatro.play();

        videoRespuestaCuatro.onended(preguntaCinco);
        
      }

    
      function respuestaIncorrecta(){

        console.log("muy bad");
        videoPreguntaCuatro.hide();
        controlsCuatroPregunta.hide();
      
        videoRespuestaCuatro = p.createVideo('src/assets/Actividadsenales/Respuesta4.mov');
      
        videoRespuestaCuatro.parent('canvasP5video');
        videoRespuestaCuatro.size(canvasW, canvasH);
        // videoRespuestaCuatro.speed(2);//comentar despues
        videoRespuestaCuatro.play();

        videoRespuestaCuatro.onended(preguntaCinco);
       
      }


    }

    function preguntaCinco(){

      videoRespuestaCuatro.hide();


      videoPreguntaCinco = p.createVideo('src/assets/Actividadsenales/Pregunta5.mov');
      videoPreguntaCinco.parent('canvasP5video');
      videoPreguntaCinco.size(canvasW, canvasH);
      // videoPreguntaCinco.speed(2);//comentar despues
      videoPreguntaCinco.play();

      videoPreguntaCinco.onended(controlsPreguntaCinco);

    }

    function controlsPreguntaCinco(){

      controlsCincoPregunta.show();

      var preguntaUnoA = p.select('.preguntaCincoA');
      var preguntaUnoB = p.select('.preguntaCincoB');
      var preguntaUnoC = p.select('.preguntaCincoC');
      var preguntaUnoD = p.select('.preguntaCincoD');
      
      preguntaUnoA.mousePressed(respuestaIncorrecta);
      preguntaUnoB.mousePressed(respuestaCorrecta);
      preguntaUnoC.mousePressed(respuestaIncorrecta);
      preguntaUnoD.mousePressed(respuestaIncorrecta);

      function respuestaCorrecta(){

        console.log("muy bien");
        videoPreguntaCinco.hide();
        controlsCincoPregunta.hide();
      

        videoRespuestaCinco = p.createVideo('src/assets/Actividadsenales/Respuesta5.mov');
      
        videoRespuestaCinco.parent('canvasP5video');
        videoRespuestaCinco.size(canvasW, canvasH);
        // videoRespuestaCinco.speed(2);//comentar despues
        videoRespuestaCinco.play();

        videoRespuestaCinco.onended(preguntaSeis);
        
      }

      function respuestaIncorrecta(){

        console.log("muy bad");
        videoPreguntaCinco.hide();
        controlsCincoPregunta.hide();

        videoRespuestaCinco = p.createVideo('src/assets/Actividadsenales/Respuesta5.mov');
      
        videoRespuestaCinco.parent('canvasP5video');
        videoRespuestaCinco.size(canvasW, canvasH);
        // videoRespuestaCinco.speed(2);//comentar despues
        videoRespuestaCinco.play();

        videoRespuestaCinco.onended(preguntaSeis);
       
      }

    }

    function preguntaSeis(){

      videoRespuestaCinco.hide();

      videoPreguntaSeis = p.createVideo('src/assets/Actividadsenales/Pregunta6.mov');
      videoPreguntaSeis.parent('canvasP5video');
      videoPreguntaSeis.size(canvasW, canvasH);
      // videoPreguntaSeis.speed(2);//comentar despues
      videoPreguntaSeis.play();
      videoPreguntaSeis.onended(controlsPreguntaSeis);

    }

    function controlsPreguntaSeis(){
      controlsSeisPregunta.show();
      

      var preguntaUnoA = p.select('.preguntaSeisA');
      var preguntaUnoB = p.select('.preguntaSeisB');
      var preguntaUnoC = p.select('.preguntaSeisC');
      var preguntaUnoD = p.select('.preguntaSeisD');
      
      preguntaUnoA.mousePressed(respuestaIncorrecta);
      preguntaUnoB.mousePressed(respuestaIncorrecta);
      preguntaUnoC.mousePressed(respuestaCorrecta);
      preguntaUnoD.mousePressed(respuestaIncorrecta);

      function respuestaCorrecta(){

        console.log("muy bien");
        videoPreguntaSeis.hide();
        controlsSeisPregunta.hide();
      

        videoRespuestaSeis = p.createVideo('src/assets/Actividadsenales/Respuesta6.mov');
      
        videoRespuestaSeis.parent('canvasP5video');
        videoRespuestaSeis.size(canvasW, canvasH);
        // videoRespuestaSeis.speed(2);//comentar despues
        videoRespuestaSeis.play();

        videoRespuestaSeis.onended(finalClase);
        
      }

      function respuestaIncorrecta(){

        console.log("muy bad");
        videoPreguntaSeis.hide();
        controlsSeisPregunta.hide();

        videoRespuestaSeis = p.createVideo('src/assets/Actividadsenales/Respuesta6.mov');
      
        videoRespuestaSeis.parent('canvasP5video');
        videoRespuestaSeis.size(canvasW, canvasH);
        // videoRespuestaSeis.speed(2);//comentar despues
        videoRespuestaSeis.play();

        videoRespuestaSeis.onended(finalClase);
       
      }

    }

    function finalClase(){
      videoRespuestaSeis.hide();
      feedFinal.show();

      var delayInMilliseconds = 3000; //1 second

      setTimeout(function() {
        
        feedFinal.hide();
        

      }, delayInMilliseconds);


    }

  }

}
