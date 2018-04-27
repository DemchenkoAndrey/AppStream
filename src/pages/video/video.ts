import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VimeoVideo } from '../videos/vimeo'
import { YoutubeVideo } from '../videos/youtube'

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {
  vimeoVideo = VimeoVideo;
  youtubeVideo = YoutubeVideo;


  constructor(public navCtrl: NavController) {

  }
  
  play(page) {
    this.navCtrl.push(page);
  }
}
