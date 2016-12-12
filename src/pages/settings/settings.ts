import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Agency } from '../../providers/agency';
import { GoogleAnalytics } from 'ionic-native';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  agencyDefinition: any = {};

  constructor(public navCtrl: NavController, public agency: Agency) {}

  ionViewDidEnter() {
    GoogleAnalytics.trackView("settings");
  }
  updateAgency() {
    //console.log(this.agencyDefinition);
    if(!!this.agencyDefinition.url && !!this.agencyDefinition.url.length) {
      this.agency.getFromUrl(this.agencyDefinition.url);
      console.log('Got URL');
      GoogleAnalytics.trackEvent("configuration", "changed_definition_using_url", "", 1, false);
    } else {
      this.agency.setData(this.agencyDefinition.value);
      console.log('Got raw data');
      GoogleAnalytics.trackEvent("configuration", "changed_definition_using_raw", "", 1, false);
    }
  }

}
