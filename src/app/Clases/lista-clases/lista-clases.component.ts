import { Component, OnInit, Input } from '@angular/core';

import { Modulo } from 'src/app/modulos';
import { Clases } from '../clases';
import { ProcessPersistanceService } from '../process-persistance.service';

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

  readySignals:boolean;
  readyNormas:boolean;
  readyVehiculo:boolean;
  
  constructor(
    private persister: ProcessPersistanceService
  ) { }

  ngOnInit() {

    this.readySignals =false;
    this.readyNormas =false;
    this.readyVehiculo =false;

    const respose = this.persister.get('ClassStateSignals');
    
    if(respose!=null){
    if(respose.finish ==='yes'){
      this.readySignals=true;
    }
  }

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
