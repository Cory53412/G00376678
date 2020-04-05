import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  userFeedback : String;
  constructor(private storage:Storage) { }

  ngOnInit() {
   this.storage.get("feedback").then(
     (data)=>{
       this.userFeedback = data;
     }
   ).catch(
     (error)=>{
        console.log(error);
     }
   )
   
  }

  onSave(){
    console.log(this.userFeedback);
    this.storage.set("feedback",this.userFeedback);
  }

}
