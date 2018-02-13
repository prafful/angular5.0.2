import { Component, OnInit } from '@angular/core';
import { HttpClientServiceService } from '../http-client-service.service';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../user-info';

import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  observableUserInfo: Observable<UserInfo[]>;
  userInfo: UserInfo[];


  constructor(private newHttpClientService:HttpClientServiceService) { }

  ngOnInit() {
    this.getRemoteDataLocal();
  }

  getRemoteDataLocal(){
    this.observableUserInfo = this.newHttpClientService.getRemoteData();
    this.observableUserInfo.subscribe( 
      userInfo =>{
        this.userInfo = userInfo;
        console.log(userInfo);
    },
  (err:HttpErrorResponse) =>{
    if(err.error instanceof Error){
      console.log("Client side error has occured. Pl. check your configuration.")
    } else {
      console.log("Server side error has occured. Pl. check the server side configuration.");
    }
  });
  }

}
