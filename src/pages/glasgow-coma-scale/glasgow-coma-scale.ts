import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-glasgow-coma-scale',
  templateUrl: 'glasgow-coma-scale.html'
})
export class GlasgowComaScalePage {
  gcsTotal: number = 0;
  gcsRating: any = {eye: 0, verbal: 0, motor: 0};

  constructor(public navCtrl: NavController) {}

  updateGcsTotal() {
    this.gcsTotal = this.gcsRating.eye + this.gcsRating.verbal + this.gcsRating.motor;
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("glasgow-coma-scale");
  }

}
