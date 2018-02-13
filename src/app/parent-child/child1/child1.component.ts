import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core'


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() myName;

  @Output() sendMyNameToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateMyName(value){
    this.sendMyNameToParent.emit(value);
    console.log(value);
  }

}
