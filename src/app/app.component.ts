import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ToolsPage } from '../pages/tools/tools';
import { ContactsPage } from '../pages/contacts/contacts';
import { ProtocolGroupsPage } from '../pages/protocol-groups/protocol-groups';
import { SettingsPage } from '../pages/settings/settings';
import { ResourcesPage } from '../pages/resources/resources';
import { HelpPage } from '../pages/help/help';
import { GlasgowComaScalePage } from '../pages/glasgow-coma-scale/glasgow-coma-scale';
import { RuleOf9sPage } from '../pages/rule-of-9s/rule-of-9s';
import { CincinnatiPrehospitalStrokeScalePage } from '../pages/cincinnati-prehospital-stroke-scale/cincinnati-prehospital-stroke-scale';
import { GoogleAnalytics } from 'ionic-native';
import { ConfigurationProvider } from '../providers/configuration-provider';
import { Observable } from 'rxjs/Observable';
import { Deeplinks } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProtocolGroupsPage;

  pages: Array<{title: string, component: any}>;
  configuration$: Observable<any>;

  constructor(public platform: Platform, public configurationProvider: ConfigurationProvider) {
    this.configuration$ = this.configurationProvider.configuration;
    this.configurationProvider.loadAll();
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
      Deeplinks.routeWithNavController(this.nav, {
        '/tools': ToolsPage,
        '/tools/glasgow-coma-scale': GlasgowComaScalePage,
        '/tools/cincinnati-prehospital-stroke-scale': CincinnatiPrehospitalStrokeScalePage,
        '/tools/rule-of-9s': RuleOf9sPage,
        '/settings': SettingsPage,
        '/settings/url/:url': SettingsPage,
        '/resources': ResourcesPage,
        '/protocol-groups': ProtocolGroupsPage,
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
