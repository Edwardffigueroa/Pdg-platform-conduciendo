import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCursoComponent } from '../main-curso/main-curso.component';
import { Routes, RouterModule } from '@angular/router';

const cursoRoutes: Routes = [
  {path: 'curso', component: MainCursoComponent }
  // {path: 'curso', component: MainCursoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(cursoRoutes)
  ],exports: [ RouterModule ],
  declarations: []
})
export class CursoRoutingModule { }
