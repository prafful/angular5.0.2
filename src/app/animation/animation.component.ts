import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style} from '@angular/animations'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('growUpAnimation',[
                              state('kid',style({
                                                  transform:'scale(1)',
                                                  color:'pink'
                                                })), 
                              state('elder', style({
                                                  transform:'scale(4)',
                                                  color:'brown'
                              })),
                            transition('kid <=> elder', animate('2000ms ease-in')) ])
  ]
})
export class AnimationComponent implements OnInit {

  myState:String = 'elder';

  constructor() { }

  ngOnInit() {
  }

  growUpNow(){
    this.myState = this.myState == 'elder'? 'kid':'elder';



  }


}
