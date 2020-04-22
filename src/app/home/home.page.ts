import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'//storage import so application can save data to disc

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //variables
  userFeedback: string;
  constructor(private storage: Storage) { }

  //ionViewWillENter() is used so data is updated everytime it is saved.
  ionViewWillEnter() {
    this.storage.get("feedback").then(
      (data) => {
        this.userFeedback = data; //assigns saved data to variable userFeedback
      }
    ).catch(//error handling
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {

  }
}
