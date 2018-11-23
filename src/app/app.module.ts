import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './Home/inicio/inicio.component';
import { InicioMenuComponent } from './Home/inicio-menu/inicio-menu.component';


import { AppRoutingModule } from './app-routing.module';
import { CursoModule } from './Curso/curso.module';
import { LoginComponent } from './Home/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioMenuComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
