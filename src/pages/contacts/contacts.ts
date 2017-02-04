import { Component } from '@angular/core';
import { NavController, Platform, PopoverController } from 'ionic-angular';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { ContactsPopoverPage } from '../contacts-popover/contacts-popover';
import { Configuration } from '../../models/configuration';
import { Contact } from '../../models/contact';
import { GoogleAnalytics } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  configuration$: Observable<Configuration>;
  filteredContacts: Contact[];
  subscription: any;
  tags: string[];

  constructor(public navCtrl: NavController, public configurationProvider: ConfigurationProvider,
  public popoverCtrl: PopoverController, public platform: Platform) {
    this.tags = [];
    this.configuration$ = this.configurationProvider.configuration;
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("Contacts");
  }

  launch(url) {
    window.open(url, '_system');
  }

  call(number) {
    this.launch('tel:' + number);
  }

  map(address) {
    if (this.platform.is('ios')) {
      this.launch('http://maps.apple.com/?address=' + address);
    } else {
      this.launch('geo:0,0?q=' + address);
    }
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ContactsPopoverPage, {
      setFilterTags: (tags: string[]) =>  {
        this.tags = tags;
      },
      getFilterTags: () => {
        return this.tags;
      }
    });
    popover.present({
      ev: myEvent
    });
  }

}
