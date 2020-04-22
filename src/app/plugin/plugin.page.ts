import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';//geolocation import to have access to plugin
import { BackgroundMode } from '@ionic-native/background-mode/ngx';//background import to have access to background plugin

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.page.html',
  styleUrls: ['./plugin.page.scss'],
})
export class PluginPage implements OnInit {
  //variables
longitude : number;
latitude: number;

  constructor(private geolocation: Geolocation, private backgroundMode: BackgroundMode ) { }

  ngOnInit() {
  }

  bgMode(){//Cordova plugin to prevent the app from going to sleep while in background.
    this.backgroundMode.enable();
    console.log("enabled background mode");//writing to console to show it works
  }

  geoFinder(){//This plugin provides information about the device's location, such as latitude and longitude. 
    this.geolocation.getCurrentPosition().then((resp) => {
     this.latitude = resp.coords.latitude//assigns latitude data to variable
     this.longitude =  resp.coords.longitude//assigns longitude data to variable
     }).catch((error) => {//error handling
       console.log('Error getting location', error);
     });
  }

}
