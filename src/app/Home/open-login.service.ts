import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenLoginService {

  openLogin =false;
  
  @Output() change: EventEmitter <boolean> = new EventEmitter();

  constructor() { }

  abrirLogin(){

    this.openLogin = true;
    this.change.emit(this.openLogin);

  }

}
