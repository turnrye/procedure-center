import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Agency } from '../../providers/agency';
import { GoogleAnalytics } from 'ionic-native';
/*
  Generated class for the Contacts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contaccts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  constructor(public navCtrl: NavController, public agency: Agency, public platform: Platform) {}

  ionViewDidEnter() {
    GoogleAnalytics.trackView("Contacts");
  }
  launch(url) {
    window.open(url, '_system');
  }
  call(number) {
    console.log("called call with number: " + number);
    window.open('tel:' + number, '_system');
  }
  map(address) {
    window.open('geo:?daddr=' + address, '_system');
  }

}
