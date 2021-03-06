import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component ({
  selector: "page-youtube",
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Sci-fi & Tech</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <iframe width="100%" height="100%" src="http://www.youtube.com/embed/uRDtLOTg1UM" frameborder="0" allowfullscreen></iframe> 
    </ion-content>
  `
})

export class YoutubeVideo {
  constructor(public navCtrl: NavController) {
    
  }
}