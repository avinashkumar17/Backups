import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient:HttpClient) { 

  }

 public login():Observable<any>{
    return this.httpClient.get("https://api.myjson.com/bins/177fzx",{observe:'response'});
  }
}
