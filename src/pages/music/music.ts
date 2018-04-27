import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { Popover } from '../../components/popover/popover';

@Component({
  selector: 'page-music',
  templateUrl: 'music.html'
})
export class MusicPage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

    presentPopover(event) {
    let popover = this.popoverCtrl.create(Popover);
    popover.present({
      ev: event
    });
  }

}
