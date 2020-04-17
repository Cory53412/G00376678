import { Component, OnInit } from '@angular/core';
import { RemoteService } from "../Services/remote.service";
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
movieData:any = [];
  constructor(private movieService: RemoteService ) { }

  ngOnInit() :void{
    this.movieService.getThisYearData().subscribe(
      (data)=>{
          this.movieData=data.Search;
      }
    );
  }

}
