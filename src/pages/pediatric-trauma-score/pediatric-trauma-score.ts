import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-pediatric-trauma-score',
  templateUrl: 'pediatric-trauma-score.html'
})
export class PediatricTraumaScorePage {

  ptsTotal: number = 0;
  pts: any = {weight: 0, airway: 0, systolic: 0, cns: 0, fractures: 0, wounds: 0};

  constructor(public navCtrl: NavController) {}

  updatePtsTotal() {
    this.ptsTotal = this.pts.weight + this.pts.airway + this.pts.systolic + this.pts.cns + this.pts.fractures + this.pts.wounds;
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("pediatric-trauma-score");
  }

}
