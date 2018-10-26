import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-curso',
  templateUrl: './menu-curso.component.html',
  styleUrls: ['./menu-curso.component.css']
})
export class MenuCursoComponent implements OnInit {

  overed = false;

  constructor() { }

  ngOnInit() {
  }

  mouseOut(){
    this.overed = false;
  }

  mouseIn(){
    this.overed = true;
  }


}
