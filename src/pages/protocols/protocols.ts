import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { ProtocolPage } from '../protocol/protocol';
import { GoogleAnalytics } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../models/configuration';

@Component({
  selector: 'page-protocols',
  templateUrl: 'protocols.html'
})
export class ProtocolsPage {

  searchQuery: string = '';
  configuration$: Observable<Configuration>;
  search: string = '';

  constructor(public navCtrl: NavController, public configurationProvider: ConfigurationProvider) {
    this.configuration$ = this.configurationProvider.configuration;
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
