import { Component, OnInit } from '@angular/core';
import { MODULOS } from '../../bd_modulos';
import { Modulo } from '../../modulos';
import { ServicioClasesService } from '../../Clases/servicio-clases.service';

@Component({
  selector: 'app-lista-modulos-curso',
  templateUrl: './lista-modulos-curso.component.html',
  styleUrls: ['./lista-modulos-curso.component.css']
})
export class ListaModulosCursoComponent implements OnInit {

  modulos = MODULOS;

  moduloSeleccionado: Modulo;
  

  constructor(

    private servicioclases:ServicioClasesService

    ) { }

  ngOnInit() {

    this.moduloSeleccionado = this.modulos[0];
    
  }

  onSelect(modulo: Modulo):void {

    this.moduloSeleccionado= modulo;

  }

  openSelectedClass(mdl: Modulo){
    this.servicioclases.abrirClase(mdl);
  }

}
