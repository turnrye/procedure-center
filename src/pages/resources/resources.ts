import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResourcePage } from '../resource/resource';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { GoogleAnalytics } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})
export class ResourcesPage {

  configuration$: Observable<any>;
  constructor(public navCtrl: NavController, public configurationProvider: ConfigurationProvider) {
    this.configuration$ = this.configurationProvider.configuration;
  }

  goToPage(event, resource) {
    this.navCtrl.push(ResourcePage, {
      resource: resource
    });
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("resources");
  }

}
