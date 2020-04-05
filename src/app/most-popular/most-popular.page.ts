import { Component, OnInit } from '@angular/core';
import { RemoteService } from "../Services/remote.service";

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.page.html',
  styleUrls: ['./most-popular.page.scss'],
})
export class MostPopularPage implements OnInit {
  TVShowData:any[];
  constructor(private movieService: RemoteService) { }

  ngOnInit() {
    this.movieService.getTVShowData().subscribe(
      (data)=>{
          this.TVShowData=data.Search;
      }
    );
  }

}
