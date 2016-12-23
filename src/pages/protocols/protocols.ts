import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProtocolPage } from '../protocol/protocol';
import { GoogleAnalytics } from 'ionic-native';

/*
  Generated class for the Protocols page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-protocols',
  templateUrl: 'protocols.html'
})
export class ProtocolsPage {

  protocolGroup: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.protocolGroup = navParams.get('protocolGroup');
  }

 protocolTapped(event, protocol) {
     this.navCtrl.push(ProtocolPage, {
        protocol: protocol
     });
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("protocols");
  }

}
