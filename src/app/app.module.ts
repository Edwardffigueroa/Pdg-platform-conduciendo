import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './Home/inicio/inicio.component';
import { InicioMenuComponent } from './Home/inicio-menu/inicio-menu.component';
import { RegistroComponent } from './Home/registro/registro.component';
import { InicioSesionComponent } from './Home/inicio-sesion/inicio-sesion.component';
import { AppRoutingModule } from './app-routing.module';
import { CursoModule } from './Curso/curso.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioMenuComponent,
    RegistroComponent,
    InicioSesionComponent
    
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
