import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserInfo } from '../user-info'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceService {

  friends = ["Manish", "Mohan", "Madan",  "Manju", "Makkhi"];

  callMyFriends(){
    return this.friends;
  }

  constructor(private httpService:Http) { }

  getRemoteData():Observable<UserInfo[]>{
    return this.httpService.get(
      "https://jsonplaceholder.typicode.com/todos"
    ).map(response => response.json() as UserInfo[])

  }

}
