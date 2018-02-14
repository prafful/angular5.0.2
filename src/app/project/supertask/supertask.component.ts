import { Component, OnInit } from '@angular/core';
import { TaskInfo } from '../task-info';

@Component({
  selector: 'app-supertask',
  templateUrl: './supertask.component.html',
  styleUrls: ['./supertask.component.css']
})

export class SupertaskComponent implements OnInit {

  taskInformation: TaskInfo;
  taskInformations:TaskInfo[]=[];
  
 
  

  constructor() { }

  ngOnInit() {
    this.taskInformation = {
      task:"",
      doneBy:"",  
      priority:"",
      description:"",
      outcome:""
    }
 
  }

  addTask = function(){
    
    
    console.log("Adding Task")
    this.taskInformations.push(this.taskInformation)
    this.taskInformation = {
      task:"",
      doneBy:"",  
      priority:"",
      description:"",
      outcome:""
    }
    console.log(this.taskInformations)
  }

}
