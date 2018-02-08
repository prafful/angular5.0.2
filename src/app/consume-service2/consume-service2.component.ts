import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-consume-service2',
  templateUrl: './consume-service2.component.html',
  styleUrls: ['./consume-service2.component.css']
})
export class ConsumeService2Component implements OnInit {

  constructor(private myService:UserServiceService) { 

    console.log(myService.callMyFriends());
    myService.friends.push("include me too");

  }

  ngOnInit() {
  }

}
