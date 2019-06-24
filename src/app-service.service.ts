import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable,forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient:HttpClient) { 

  }

 public login():Observable<any>{
    return this.httpClient.get("https://api.myjson.com/bins/177fzx",{observe:'response'});
  }

  public fork():Observable<any[]>{
    let service1=this.httpClient.get("https://api.myjson.comm/bins/177fz",{observe:'response'});
    let service2=this.httpClient.get("https://api.myjson.com/bins/177fz",{observe:'response'});
    return forkJoin([service1,service2]);
  }
}
