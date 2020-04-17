import { Component , OnInit} from '@angular/core';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 userStatus:string;
  constructor(private storage : Storage) {}



  ngOnInit(){
    this.storage.get("feedback").then(
      (data)=>{
        this.userStatus = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );

    
  }
}
