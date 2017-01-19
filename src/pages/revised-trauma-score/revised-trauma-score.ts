import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import { GlasgowComaScalePage } from '../glasgow-coma-scale/glasgow-coma-scale';

@Component({
  selector: 'page-revised-trauma-score',
  templateUrl: 'revised-trauma-score.html'
})
export class RevisedTraumaScorePage {

  rtsTotal: number = 0;
  rtsRating: any = {gcs: 0, systolic: 0, respiratory: 0};

  constructor(public navCtrl: NavController) {}

  updateRtsTotal() {
    this.rtsTotal = this.rtsRating.gcs + this.rtsRating.systolic + this.rtsRating.respiratory;
  }

  ionViewDidLoad() {
    GoogleAnalytics.trackView("revised-trauma-score");
  }

  goToGcs() {
    this.navCtrl.push(GlasgowComaScalePage);
  }

}
