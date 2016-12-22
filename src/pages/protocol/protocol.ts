import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

/*
  Generated class for the Protocol page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-protocol',
  templateUrl: 'protocol.html'
})
export class ProtocolPage {
  protocol: any;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.protocol = navParams.get('protocol');
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("protocol");
  }

}
