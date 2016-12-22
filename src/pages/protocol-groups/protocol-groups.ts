import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { ProtocolsPage } from '../protocols/protocols';
import { GoogleAnalytics } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-protocol-groups',
  templateUrl: 'protocol-groups.html'
})
export class ProtocolGroupsPage {

  searchQuery: string = '';
  configuration$: Observable<any>;

  constructor(public navCtrl: NavController, public configurationProvider: ConfigurationProvider) {
    this.configuration$ = this.configurationProvider.configuration;
  }

  protocolGroupTapped(event, protocolGroup) {
     this.navCtrl.push(ProtocolsPage, {
        protocolGroup: protocolGroup
     });
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("protocol-groups");
  }
}
