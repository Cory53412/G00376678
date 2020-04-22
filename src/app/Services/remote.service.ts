import { Injectable } from '@angular/core';
//By adding the HttpClientModule to our imports, we are making the functionality that is necessary to make
// HTTP requests available throughout the application.
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  //Added the HttpClient into the constructor to make HTTP requests.
  constructor(public httpClient: HttpClient) { }

//Http returns observable. This means application can continue running while another request is running in background
  getThisYearData(): Observable<any> {
    //retrieving data from json blob.
    return this.httpClient.get('https://jsonblob.com/api/3214f68c-8013-11ea-9f9d-03f1d11d3041');
    
  }

  getDecadeData(): Observable<any> {
    return this.httpClient.get('https://jsonblob.com/api/e8b22fcf-8097-11ea-b0e8-29435719928a');
  }
}
