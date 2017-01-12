import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ToolsPage } from '../pages/tools/tools';
import { ContactsPage } from '../pages/contacts/contacts';
import { SettingsPage } from '../pages/settings/settings';
import { ProtocolsPage } from '../pages/protocols/protocols';
import { HelpPage } from '../pages/help/help';
import { GlasgowComaScalePage } from '../pages/glasgow-coma-scale/glasgow-coma-scale';
import { RuleOf9sPage } from '../pages/rule-of-9s/rule-of-9s';
import { ApgarScorePage } from '../pages/apgar-score/apgar-score';
import { BLSCPRComponentsPage } from '../pages/bls-cpr-components/bls-cpr-components';
import { CincinnatiPrehospitalStrokeScalePage } from '../pages/cincinnati-prehospital-stroke-scale/cincinnati-prehospital-stroke-scale';
import { FacesPainScalePage } from '../pages/faces-pain-scale/faces-pain-scale';
import { GoogleAnalytics } from 'ionic-native';
import { ConfigurationProvider } from '../providers/configuration-provider';
import { Observable } from 'rxjs/Observable';
import { Deeplinks } from 'ionic-native';
import { Configuration } from '../models/configuration';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProtocolsPage;

  pages: Array<{icon: string, title: string, component: any}>;
  configuration$: Observable<Configuration>;

  constructor(public platform: Platform, public configurationProvider: ConfigurationProvider) {
    this.configurationProvider.loadInitialData();
    this.configuration$ = this.configurationProvider.configuration;
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'list', title: 'Protocols', component: ProtocolsPage },
      { icon: 'contacts', title: 'Contacts', component: ContactsPage },
      { icon: 'heart', title: 'Tools', component: ToolsPage },
      { icon: 'cog', title: 'Settings', component: SettingsPage },
      { icon: 'help', title: 'Help', component: HelpPage }
    ];
    this.platform.ready().then(() => {
      GoogleAnalytics.debugMode();
      GoogleAnalytics.startTrackerWithId("UA-88824090-1", 30);
      Deeplinks.routeWithNavController(this.nav, {
        '/tools': ToolsPage,
        '/tools/glasgow-coma-scale': GlasgowComaScalePage,
        '/tools/cincinnati-prehospital-stroke-scale': CincinnatiPrehospitalStrokeScalePage,
        '/tools/bls-cpr-components': BLSCPRComponentsPage,
        '/tools/rule-of-9s': RuleOf9sPage,
        '/tools/apgar-score': ApgarScorePage,
        '/tools/faces-pain-scale': FacesPainScalePage,
        '/settings': SettingsPage,
        '/settings/url/:url': SettingsPage,
        '/protocols': ProtocolsPage,
        '/contacts': ContactsPage,
        '/help': HelpPage
      }).subscribe((match) => {
        console.log('Successfully matched route', match);
      }, (nomatch) => {
        console.error('Got a deeplink that didn\'t match', nomatch);
      });
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
