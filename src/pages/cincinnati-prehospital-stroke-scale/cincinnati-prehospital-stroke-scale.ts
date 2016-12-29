import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-cincinnati-prehospital-stroke-scale',
  templateUrl: 'cincinnati-prehospital-stroke-scale.html'
})
export class CincinnatiPrehospitalStrokeScalePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {
    GoogleAnalytics.trackView("cincinnati-prehospital-stroke-scale");
  }
}
