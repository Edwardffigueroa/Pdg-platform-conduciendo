import { Injectable, Output, EventEmitter } from '@angular/core';
import { Modulo } from '../modulos';



@Injectable({
  providedIn: 'root'
})

//@Injectable()
export class ServicioClasesService {

  openClass = false;

  @Output() change: EventEmitter <boolean> = new EventEmitter();
  @Output() classChange: EventEmitter <Modulo> = new EventEmitter();

  constructor() { }

  abrirClase(mdl:Modulo){
    
    //this.openClass = !this.openClass;
    this.openClass =true;
//    console.log("d"+this.openClass);
    this.change.emit(this.openClass);
    this.classChange.emit(mdl);
  }

}
