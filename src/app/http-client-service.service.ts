import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from './user-info'

@Injectable()
export class HttpClientServiceService {

  constructor(private newhttpClient:HttpClient) { }

  getRemoteData():Observable<UserInfo[]>{
    return this.newhttpClient.get<UserInfo[]>('https://jsonplaceholder.typicode.com/users');
  }

}
