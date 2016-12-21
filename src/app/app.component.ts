import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ToolsPage } from '../pages/tools/tools';
import { ContactsPage } from '../pages/contacts/contacts';
import { ProtocolsPage } from '../pages/protocols/protocols';
import { ProtocolPage } from '../pages/protocol/protocol';
import { ProtocolGroupsPage } from '../pages/protocol-groups/protocol-groups';
import { DrugsPage } from '../pages/drugs/drugs';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { ResourcesPage } from '../pages/resources/resources';
import { ResourcePage } from '../pages/resource/resource';
import { HelpPage } from '../pages/help/help';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProtocolGroupsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Protocol Groups', component: ProtocolGroupsPage },
      { title: 'Contacts', component: ContactsPage },
      { title: 'Tools', component: ToolsPage },
      { title: 'Resources', component: ResourcesPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Help', component: HelpPage }
    ];
    this.platform.ready().then(() => {
      GoogleAnalytics.debugMode();
      GoogleAnalytics.startTrackerWithId("UA-88824090-1", 30);
      console.log('Done loading');
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
