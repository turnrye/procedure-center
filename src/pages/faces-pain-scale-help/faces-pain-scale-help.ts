import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-faces-pain-scale-help',
  templateUrl: 'faces-pain-scale-help.html'
})
export class FacesPainScaleHelpPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    GoogleAnalytics.trackView("faces-pain-scale-help");
  }
}
