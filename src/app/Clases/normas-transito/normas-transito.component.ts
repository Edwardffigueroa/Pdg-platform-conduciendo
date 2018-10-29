import { Component, OnInit, Input } from '@angular/core';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import { Clases } from '../clases';

@Component({
  selector: 'app-normas-transito',
  templateUrl: './normas-transito.component.html',
  styleUrls: ['./normas-transito.component.css']
})
export class NormasTransitoComponent implements OnInit {

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

    var primerRetoVideo;
    var primerRetoControls;
    var primerRetoExplicacionVideo;

    var segundoRetoVideo;
    var segundoRetoControls;

    var retroalimenatacionBuena;
    var retroalimenatacionMala;



    p.setup = () =>{

      primerRetoControls = p.select('.primerRetoControlsContainer');
      primerRetoControls.hide();

      retroalimenatacionMala = p.select('.retroAlimentacionMalaContainer');
      retroalimenatacionMala.hide();
      retroalimenatacionBuena =p.select('.retroAlimentacionBuenaContainer');
      retroalimenatacionBuena.hide();
      primerReto();

    }

    function primerReto(){

      primerRetoVideo = p.createVideo('src/assets/actividadexplicativa/1.mov');
      primerRetoVideo.parent('canvasP5video');
      primerRetoVideo.size(canvasW, canvasH);
      primerRetoVideo.speed(2);//comentar despues
      
      primerRetoVideo.play();

      primerRetoVideo.onended(primerRetoSelectores);

    }

    function primerRetoSelectores(){
      primerRetoControls.show();

      var izquierda = p.select('.izquierda');
      var derecha = p.select('.derecha');

      izquierda.mousePressed(respuestaCorrecta);
      derecha.mousePressed(respuestaIncorrecta);

      var btn_continuar_correct = p.select('.continuar_btn_correct');
      var btn_continuar_bad = p.select('.continuar_btn_bad');
    

      function respuestaCorrecta(){
        primerRetoControls.hide();
        primerRetoVideo.hide();

        retroalimenatacionBuena.show();
        btn_continuar_correct.mousePressed(primerRetoExplicacion);

      }
        
  
      function respuestaIncorrecta(){

        primerRetoControls.hide();
        primerRetoVideo.hide();
  
        retroalimenatacionMala.show();
        btn_continuar_bad.mousePressed(primerRetoExplicacion);
        
      }

   

    }

    function primerRetoExplicacion(){

      retroalimenatacionBuena.hide();
      retroalimenatacionMala.hide();
      
      primerRetoExplicacionVideo = p.createVideo('src/assets/actividadexplicativa/2.mov');
      primerRetoExplicacionVideo.parent('canvasP5video');
      primerRetoExplicacionVideo.size(canvasW, canvasH);
      primerRetoExplicacionVideo.speed(2);//comentar despues
      
      primerRetoExplicacionVideo.play();

      primerRetoExplicacionVideo.onended(segundoReto);

    }

    function segundoReto(){

      primerRetoExplicacionVideo.hide();
      
      segundoRetoVideo = p.createVideo('src/assets/actividadexplicativa/2.mov');
      segundoRetoVideo.parent('canvasP5video');
      segundoRetoVideo.size(canvasW, canvasH);
      segundoRetoVideo.speed(2);//comentar despues
      
      segundoRetoVideo.play();

      segundoRetoVideo.onended(segundoRetoSelectores);
      
    }

    function segundoRetoSelectores(){
      

    }

 

    function timerOcultar(toHide){
      var delayInMilliseconds = 3000; //1 second

      setTimeout(function() {

        toHide.hide();
        

      }, delayInMilliseconds);

      

      
    }

    

  } 

}
