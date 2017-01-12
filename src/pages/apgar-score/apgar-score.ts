import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-apgar-score',
  templateUrl: 'apgar-score.html'
})
export class ApgarScorePage {
  apgarScore: any = {reflex: 0, skinColor: 0, muscleTone: 0, respirations: 0, heartRate: 0, total: 0};

  constructor(public navCtrl: NavController) {}

  updateApgarScore() {
    this.apgarScore.total = this.apgarScore.reflex + this.apgarScore.skinColor
    + this.apgarScore.muscleTone + this.apgarScore.respirations + this.apgarScore.heartRate;
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("apgar-score");
  }

}
