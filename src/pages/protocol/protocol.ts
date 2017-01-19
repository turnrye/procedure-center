import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { Configuration } from '../../models/configuration';
import { Protocol } from '../../models/protocol';
import { Observable } from 'rxjs/Observable';

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
  protocol: Protocol;
  configuration$: Observable<Configuration>;

  constructor(public navCtrl: NavController, navParams: NavParams, public configurationProvider: ConfigurationProvider) {
    this.configuration$ = this.configurationProvider.configuration;
    this.configuration$.subscribe(configuration => {
      this.protocol = configuration.getProtocolById(navParams.get('protocolId'));
    });
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("protocol");
  }

}
