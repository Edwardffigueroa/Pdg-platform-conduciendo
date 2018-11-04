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

    p.setup = () =>{

      btnStart = p.select('.btn-start');
      btnStart.hide();

      explicacionSenalesVideo();

    }

    function explicacionSenalesVideo(){
      explicacionSenales = p.createVideo('src/assets/senales/senalesdetransito.mov');
      explicacionSenales.parent('canvasP5video');
      explicacionSenales.size(canvasW, canvasH);
      // explicacionSenales.speed(2);//comentar despues
      
      explicacionSenales.play();

      //explicacionSenales.onended(primerRetoSelectores);
    }

  }

}
