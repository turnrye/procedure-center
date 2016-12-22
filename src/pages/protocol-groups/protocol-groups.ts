import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Agency } from '../../providers/agency';
import { ProtocolsPage } from '../protocols/protocols';
import { GoogleAnalytics } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProtocolGroups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-protocol-groups',
  templateUrl: 'protocol-groups.html'
})
export class ProtocolGroupsPage {

  searchQuery: string = '';
  configuration$: Observable<any>;

  constructor(public navCtrl: NavController, public agency: Agency) {
    this.configuration$ = this.agency.configuration;
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
