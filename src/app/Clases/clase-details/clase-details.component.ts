import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Clases } from '../clases';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.dom';

// import 'p5';


@Component({
  selector: 'app-clase-details',
  templateUrl: './clase-details.component.html',
  styleUrls: ['./clase-details.component.css']
})
export class ClaseDetailsComponent implements OnInit {

  private p5;

  @Input() clase: Clases;
  @ViewChild('canvasP5') container : ElementRef;
  
  
  constructor() { }

  ngOnInit() {
    
  }

  empezar(){

    
      this.createCanvas();


    /*if(this.clase.name =='El vehículo y la vía'){

    this.createCanvas();

    }
  if(this.clase.name =='Autoridades y normas de trásito'){
    
    this.createAutoridades();

  }*/

  }

  

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
//------------------processing-----------------------
  // private sketch(p: any) {
    sketch = (p:any) =>{
      
      console.log("desde processing name: "+ this.clase.name);

      
   // console.log("desde processing"+this.holamundo);

    //variables
    
    var canvasDiv = document.getElementById('canvasP5');
    var canvasW = canvasDiv.clientWidth;
    var canvasH = canvasDiv.clientHeight;
    var btnStart;

    var laVia;//explicación de la vía
    var mandos; //explicación mandos
    var laViaActividad;
    var feedbackContain;
    var elVehiculo; 
    var elVehiculoActividadUno;
    var elVehiculoActividadDos;
    var elVehiculoActividadTres;
    var feedActividadElvehiculo;
    var feedFinal;

    //actividad vehículo

    var respuestasCorrectas=0;
    var respuestasIncorrectas=0;

    p.setup = () => {

      btnStart = p.select('.btn-start');
      btnStart.hide();
      
      laViaActividad = p.select('.mainActividadVia');
      laViaActividad.hide();

      feedbackContain = p.select('.feed-main-via');
      feedbackContain.hide();

      elVehiculoActividadUno = p.select('.mainActividadVehiculo_uno');
      elVehiculoActividadUno.hide();

      elVehiculoActividadDos = p.select('.mainActividadVehiculo_dos');
      elVehiculoActividadDos.hide();

      elVehiculoActividadTres = p.select('.mainActividadVehiculo_tres');
      elVehiculoActividadTres.hide();

      feedActividadElvehiculo = p.select('.feed-main-vehiculo');
      feedActividadElvehiculo.hide();

      feedFinal= p.select('.feed-final-viayvehiculo');
      feedFinal.hide();

      
     explicacionVia();
     //actividadVia();

    };      

    

    p.draw = () => {

    };

    function explicacionVia(){
      

      laVia = p.createVideo('src/assets/primeraclase/partesvia.mov');
      laVia.parent('canvasP5');
      laVia.size(canvasW, canvasH);
      // laVia.speed(2);//comentar despues
      laVia.play();
      
      
      laVia.onended(explicacionMandos);
    }

    function explicacionMandos(){
      laVia.hide();

      mandos = p.createVideo('src/assets/primeraclase/tiposvias.mov');
      mandos.parent('canvasP5');
      mandos.size(canvasW, canvasH);
      // mandos.speed(2);//comentar despues
      mandos.play();
      
      
      mandos.onended(actividadVia);

    }

    function actividadVia(){
      mandos.hide();
      
      laViaActividad.show();

      var button = p.select('.btn-next');
      
      
      button.mousePressed(evaluarActividadVia);
      

    }

    function evaluarActividadVia(){

      var selector_Anden = p.select('#selector-anden');
      var selector_Berma = p.select('#selector-berma');
      var selector_Separador = p.select('#selector-separador');
      var selector_Calzada = p.select('#selector-calzada');
      var selector_Carril = p.select('#selector-carril');

      var respuestasBuenas =0;
      var respuestasMalas= 0;

      if(selector_Anden.value()=="anden"){

        selector_Anden.addClass('goodQuestion');
        respuestasBuenas++;

      }else{

        selector_Anden.addClass('badQuestion');
        respuestasMalas++;
      }

      if(selector_Berma.value()=="berma"){
        selector_Berma.addClass('goodQuestion');
        respuestasBuenas++;
      }else{
        selector_Berma.addClass('badQuestion');
        respuestasMalas++;
      }
      if(selector_Separador.value()=="separador"){
        selector_Separador.addClass('goodQuestion');
        respuestasBuenas++;
      }else{
        selector_Separador.addClass('badQuestion');
        respuestasMalas++;
      }
      if(selector_Calzada.value()=="calzada"){
        selector_Calzada.addClass('goodQuestion');
        respuestasBuenas++;
      }else{
        selector_Calzada.addClass('badQuestion');
        respuestasMalas++;
      }
      if(selector_Carril.value()=="carril"){
        selector_Carril.addClass('goodQuestion');
        respuestasBuenas++;
      }else{
        selector_Carril.addClass('badQuestion');
        respuestasMalas++;
      }

      console.log("respuestas Buenas "+ respuestasBuenas);
      console.log("respuestas Malas "+ respuestasMalas);

      if(respuestasBuenas == 5){
        retroalimentacionVia(); 
      }
      
    }
    
    function retroalimentacionVia(){

      laViaActividad.hide();
      feedbackContain.show();

      var btnContinuar = p.select('.btn-next-via');
      btnContinuar.mousePressed(explicacionVehiculo);

    }

    function explicacionVehiculo(){

      feedbackContain.hide();

      elVehiculo = p.createVideo('src/assets/mandos.mov');
      elVehiculo.parent('canvasP5');
      elVehiculo.size(canvasW, canvasH);
      // elVehiculo.speed(2);//comentar despues
      elVehiculo.play();
      
      elVehiculo.onended(actividadVehiculo);

    }

    //------------------------pregunta UNO------------
    function actividadVehiculo(){
      elVehiculo.hide();
      elVehiculoActividadUno.show();


      /*var queryUno = p.createImg('src/assets/actividades/bg_actividadvehiculo/volante_img.png');
      queryUno.parent('img_act');
      queryUno.attribute('width', '100%');*/

      var btnA = p.select('.option_a');
      var btnB = p.select('.option_b');
      var btnC = p.select('.option_c');
      var btnD = p.select('.option_d');


      /*btnA.html('Pedal de frenokkkk',true);
      btnB.html('Pedal de embrague',true);
      btnC.html('Volante de dirección',true);
      btnD.html('Freno de emergencia',true);*/

      btnA.mousePressed(ActividadVehiculoBad_uno);
      btnB.mousePressed(ActividadVehiculoBad_dos);
      btnC.mousePressed(ActividadVehiculoGood);
      btnD.mousePressed(ActividadVehiculoBad_tres);

      var btnnext = p.select('.btn-next-auto');
      

      function ActividadVehiculoGood(){
        console.log("buena esa uno");
        btnC.addClass('selected');
        respuestasCorrectas++;
        ActividadVehiculoDos();

        // btnA.remove();
        // btnB.remove();
        // btnD.remove();
      }
  
      function ActividadVehiculoBad_uno(){
        btnA.addClass('selected');
        respuestasIncorrectas++;
        ActividadVehiculoDos();
        
      }
      function ActividadVehiculoBad_dos(){
        respuestasIncorrectas++;
        btnB.addClass('selected');
        ActividadVehiculoDos();
      }
      function ActividadVehiculoBad_tres(){
        respuestasIncorrectas++;
        btnD.addClass('selected');

        ActividadVehiculoDos();

      }

      


    }
//------------------------pregunta DOS------------
    function ActividadVehiculoDos(){

      console.log('seleccionado');

      elVehiculoActividadUno.hide();
      elVehiculoActividadDos.show();

      var btnA = p.select('.option_a_dos');
      var btnB = p.select('.option_b_dos');
      var btnC = p.select('.option_c_dos');
      var btnD = p.select('.option_d_dos');

      btnA.mousePressed(ActividadVehiculoBad_uno);
      btnB.mousePressed(ActividadVehiculoBad_dos);
      btnC.mousePressed(ActividadVehiculoGood);
      btnD.mousePressed(ActividadVehiculoBad_tres);

      var btnnext = p.select('.btn-next-auto-dos');
      btnnext.mousePressed(ActividadVehiculoTres);

      function ActividadVehiculoGood(){
        console.log("buena esa dos");
        btnC.addClass('selected');
        respuestasCorrectas++;
        
        ActividadVehiculoTres();
      }
  
      function ActividadVehiculoBad_uno(){
        btnA.addClass('selected');
        respuestasIncorrectas++;
        
        ActividadVehiculoTres();
        
      }
      function ActividadVehiculoBad_dos(){
        btnB.addClass('selected');
        respuestasIncorrectas++;

        ActividadVehiculoTres();
      }
      function ActividadVehiculoBad_tres(){
        btnD.addClass('selected');
        respuestasIncorrectas++;
        
        ActividadVehiculoTres();

      }

      
    }
//------------------------pregunta TRES------------
    function ActividadVehiculoTres(){

      elVehiculoActividadDos.hide();
      elVehiculoActividadTres.show();

      var btnA = p.select('.option_a_tres');
      var btnB = p.select('.option_b_tres');
      var btnC = p.select('.option_c_tres');
      var btnD = p.select('.option_d_tres');

      btnA.mousePressed(ActividadVehiculoBad_uno);
      btnB.mousePressed(ActividadVehiculoBad_dos);
      btnC.mousePressed(ActividadVehiculoGood);
      btnD.mousePressed(ActividadVehiculoBad_tres);

      var btnnext = p.select('.btn-next-auto-tres');
      

      function ActividadVehiculoGood(){
        console.log("buena esa tres");
        btnC.addClass('selected');
        respuestasCorrectas++;
        
        evaluacionActividadVehiculo();
      }
  
      function ActividadVehiculoBad_uno(){
        btnA.addClass('selected');
        respuestasIncorrectas++;
        evaluacionActividadVehiculo();
        
      }
      function ActividadVehiculoBad_dos(){
        btnB.addClass('selected');
        respuestasIncorrectas++;
        
        evaluacionActividadVehiculo();
      }
      function ActividadVehiculoBad_tres(){
        btnD.addClass('selected');
        respuestasIncorrectas++;
        
        evaluacionActividadVehiculo();

      } 

    }

    function evaluacionActividadVehiculo(){

      elVehiculoActividadTres.hide();
      feedActividadElvehiculo.show();

      console.log("respuestas correctas" + respuestasCorrectas);
      console.log("respuestas incorrectas" + respuestasIncorrectas);

      var txt_correct = p.select('.f_correcta');
      txt_correct.html("Respuestas Correctas: "+respuestasCorrectas);

      var txt_correct = p.select('.f_incorrecta');
      txt_correct.html("Respuestas Incorrectas: "+respuestasIncorrectas);

      var btnFinal = p.select('.btn-next-via-feed');
      btnFinal.mousePressed(vistaFinal);

    }

    function vistaFinal(){//yei
      feedActividadElvehiculo.hide();
      feedFinal.show();

      var delayInMilliseconds = 3000; //1 second

      setTimeout(function() {
        
        feedFinal.hide();
        console.log("desaparecer");

      }, delayInMilliseconds);

    }

    function salir(){
      p.exit();
    }


  }//final of sketch

  


  

}