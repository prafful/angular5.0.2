import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-consume-service1',
  templateUrl: './consume-service1.component.html',
  styleUrls: ['./consume-service1.component.css']
})
export class ConsumeService1Component implements OnInit {

  constructor(private myservice:UserServiceService) {

    console.log(myservice.callMyFriends());
    myservice.friends.push("nofriend");


   }

  ngOnInit() {
  }

}
