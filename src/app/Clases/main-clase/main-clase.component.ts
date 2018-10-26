import { Component, OnInit, HostBinding } from '@angular/core';
import { ServicioClasesService } from '../servicio-clases.service';
import { Modulo } from '../../modulos';
import { trigger,style, transition, animate, state} from '@angular/animations';

@Component({
  selector: 'app-main-clase',
  templateUrl: './main-clase.component.html',
  styleUrls: ['./main-clase.component.css'],
  animations:[
    trigger('entrar', [
      state('void',style({
        transform:'trasnlateX(-100%)',
        opacity:0 
      })),
      transition(':enter',[
        animate(500,style({
          transform:'trasnlateX(0)',
          opacity:1 
        }))
      ])
    ])
  ]
})
export class MainClaseComponent implements OnInit {

  @HostBinding('class.is-open')
  openClass = false;

  modulo : Modulo;

  constructor(
    private servicioclases:ServicioClasesService
  ) { }

  ngOnInit() {
    
    this.servicioclases.change.subscribe(openClass => {
      console.log(openClass);
      this.openClass = openClass;
      
    });

    this.servicioclases.classChange.subscribe(mdl =>{
      this.modulo = mdl;

      console.log("main clase:_"+this.modulo.nombre);

      //console.log("d"+this.modulo.id);

    }); 
    
  }

  closeClass(){

    this.openClass=false;
    location.reload();
    //console.log("d"+this.openClass);

  }



}
