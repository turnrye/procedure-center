import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import { FacesPainScaleHelpPage } from '../faces-pain-scale-help/faces-pain-scale-help';

@Component({
  selector: 'page-faces-pain-scale',
  templateUrl: 'faces-pain-scale.html'
})
export class FacesPainScalePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    GoogleAnalytics.trackView("faces-pain-scale");
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(FacesPainScaleHelpPage);
    popover.present({
      ev: myEvent
    });
  }
}
