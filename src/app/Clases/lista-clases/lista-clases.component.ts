import { Component, OnInit, Input } from '@angular/core';

import { Modulo } from 'src/app/modulos';
import { Clases } from '../clases';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.css']
})
export class ListaClasesComponent implements OnInit {

  @Input() modulo: Modulo;

  claseSeleccionada: Clases;

  clases:Clases[];
  //clases = this.modulo.clases;
  //clases: Clases[] = this.modulo.clases;
  
  constructor() { }

  ngOnInit() {

    if(this.modulo!=undefined){
      
    this.clases = this.modulo.clases;

    } 

    this.claseSeleccionada = this.clases[0];
    
    //console.log("ya en clase "+this.modulo.nombre);
    
  }

  onSelect(clase: Clases):void {

    this.claseSeleccionada= clase;

  }

}
