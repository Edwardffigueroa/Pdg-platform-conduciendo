import { Component, OnInit } from '@angular/core';
import { trigger,style, transition, animate, state} from '@angular/animations';



@Component({
  selector: 'app-main-curso',
  templateUrl: './main-curso.component.html',
  styleUrls: ['./main-curso.component.css'],
  animations:[
    trigger('entrar', [
      state('void',style({
        transform:'translateX(-100%)',
        
        opacity:0 
      })),
      transition(':enter',[
        animate(300,style({
          transform:'translateX(0)',
          opacity:1 
        }))
      ])
    ])
  ]
})
export class MainCursoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
