import { Component, OnInit } from '@angular/core';
import { RemoteService } from "../Services/remote.service";
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
movieData:any = [];//variable to store data read from services method.
  constructor(private movieService: RemoteService ) { }

  ngOnInit() :void{
    this.movieService.getThisYearData().subscribe(
      (data)=>{
          this.movieData=data.Search;//assigning variable to json data
      }
    );
  }

}
