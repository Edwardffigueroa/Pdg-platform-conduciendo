import { Component, OnInit } from '@angular/core';
import { OpenLoginService } from '../open-login.service';

@Component({
  selector: 'app-inicio-menu',
  templateUrl: './inicio-menu.component.html',
  styleUrls: ['./inicio-menu.component.css']
})
export class InicioMenuComponent implements OnInit {

  constructor(
    private servicioOpenLogin: OpenLoginService
  ) {}

  ngOnInit() {
  }

  openLogin(){
    this.servicioOpenLogin.abrirLogin();
  }

}
