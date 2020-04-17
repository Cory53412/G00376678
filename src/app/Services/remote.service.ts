import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient  } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(public httpClient:HttpClient) { }

  
  //observable function toget info off web here

   getThisYearData():Observable<any>{
     return this.httpClient.get('https://jsonblob.com/api/3214f68c-8013-11ea-9f9d-03f1d11d3041');
   }

   getDecadeData():Observable<any>{
    return this.httpClient.get('https://jsonblob.com/api/e8b22fcf-8097-11ea-b0e8-29435719928a');
  }
}
