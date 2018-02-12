import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../../user-info';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {

  observableUserInfo: Observable<UserInfo[]>
  user: UserInfo[];

  constructor(private httpService:UserServiceService) { }

  ngOnInit() {

    this.getRemoteDataNow();

  }

  getRemoteDataNow(){
    this.observableUserInfo = this.httpService.getRemoteData();
    this.observableUserInfo.subscribe(
      user => this.user = user
    );
   
  }

}
