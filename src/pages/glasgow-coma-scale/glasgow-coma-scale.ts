import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GlasgowComaScale page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
  ionViewDidLoad() {
    console.log('Hello GlasgowComaScalePage Page');
  }

}
