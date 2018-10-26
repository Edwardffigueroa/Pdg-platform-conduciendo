import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCursoComponent } from './Curso/main-curso/main-curso.component';
import { InicioComponent } from './Home/inicio/inicio.component';
import { MainClaseComponent } from './Clases/main-clase/main-clase.component';

const rutas: Routes=[

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  // {path: 'curso', component: MainCursoComponent},
  {path: 'inicio', component: InicioComponent}
  // {path: 'clase/:id', component: MainClaseComponent}
  
]


@NgModule({
  imports: [
    [ RouterModule.forRoot(rutas) ],
    
  ],exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
