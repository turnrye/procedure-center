import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { GoogleAnalytics } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-contaccts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  configuration$: Observable<any>;

  constructor(public navCtrl: NavController, public configurationProvider: ConfigurationProvider, public platform: Platform) {
    this.configuration$ = this.configurationProvider.configuration;
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("Contacts");
  }

  launch(url) {
    window.open(url, '_system');
  }

  call(number) {
    window.open('tel:' + number, '_system');
  }

  map(address) {
    window.open('geo:?daddr=' + address, '_system');
  }

}
