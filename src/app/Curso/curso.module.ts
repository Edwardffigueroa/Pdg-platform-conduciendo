import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoRoutingModule } from '../Curso/curso-routing/curso-routing.module';
import { MainClaseComponent } from '../Clases/main-clase/main-clase.component';
import { ListaModulosCursoComponent } from './lista-modulos-curso/lista-modulos-curso.component';
import { MenuCursoComponent } from './menu-curso/menu-curso.component';
import { ModulosCursoComponent } from './modulos-curso/modulos-curso.component';
import { MainCursoComponent } from './main-curso/main-curso.component';
import { ListaClasesComponent } from '../Clases/lista-clases/lista-clases.component';
import { ClaseDetailsComponent } from '../Clases/clase-details/clase-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NormasTransitoComponent } from '../Clases/normas-transito/normas-transito.component';
import { SenalizacionDemarcacionComponent } from '../Clases/senalizacion-demarcacion/senalizacion-demarcacion.component';


@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    MainCursoComponent,
    ModulosCursoComponent,
    MenuCursoComponent,
    ListaModulosCursoComponent,
    MainClaseComponent,
    ListaClasesComponent,
    ClaseDetailsComponent,
    NormasTransitoComponent,
    SenalizacionDemarcacionComponent
  ]
})
export class CursoModule { }
