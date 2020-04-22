import { Component, OnInit } from '@angular/core';
import { RemoteService } from "../Services/remote.service";

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.page.html',
  styleUrls: ['./most-popular.page.scss'],
})
export class MostPopularPage implements OnInit {
  decadeData:any[];//variable to store data read from services method.
  constructor(private movieService: RemoteService) { }

  ngOnInit() {
    this.movieService.getDecadeData().subscribe(
      (data)=>{
          this.decadeData=data.Search;//assigning variable to json data
      }
    );
  }

}
