import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-bls-cpr-components',
  templateUrl: 'bls-cpr-components.html'
})
export class BLSCPRComponentsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {
    GoogleAnalytics.trackView("bls-cpr-components");
  }
}
