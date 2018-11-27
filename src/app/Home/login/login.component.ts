import { Component, OnInit, HostBinding } from '@angular/core';
import { OpenLoginService } from '../open-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @HostBinding('class.is-open')
  openLogin = false;

  constructor(
    private servicioOpenLogin: OpenLoginService
  ) { }

  ngOnInit() {
    this.servicioOpenLogin.change.subscribe(openLogin =>{
      this.openLogin = openLogin;
    })
  }

  closeLogin(){

    this.openLogin = false;

  }
}
