import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './Home/inicio/inicio.component';
import { InicioMenuComponent } from './Home/inicio-menu/inicio-menu.component';


import { AppRoutingModule } from './app-routing.module';
import { CursoModule } from './Curso/curso.module';
import { LoginComponent } from './Home/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioMenuComponent,
    LoginComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule, 
    CursoModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
