import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = [
            "Read about block chain in retail solutions",
            "Plan trip to pune",
            "Plan a trip to lonavala",
            "Plan a trip to Ahmedabad",
            "Take good rest every day"
          ]
  myTask = ""          

  constructor() { }

  ngOnInit() {
  }

  removeTask = function(counter){
    console.log("Removing "+ this.tasks[counter]);
    this.tasks.splice(counter, 1);    
  }

  addTask = function(){
    this.tasks.push(this.myTask);
    this.myTask ="";
  }

}
