import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient  } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(public httpClient:HttpClient) { }

  
  //observable function toget info off web here
   getMovieData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=ef2f2212&s=war');
   }

   getTVShowData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=ef2f2212&s=Death');
   }
}
