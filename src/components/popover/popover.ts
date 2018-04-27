import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
  template: `
    <ion-list>
      <ion-list-header>Popover</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Learn Ionic</button>
    </ion-list>
  `
})
export class Popover {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}