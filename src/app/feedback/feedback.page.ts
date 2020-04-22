import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  //variable
  userFeedback : String;
  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  onSave(){//on the click of this button save data to variable userFeedback
    console.log(this.userFeedback);
    this.storage.set("feedback",this.userFeedback);
  }


}
