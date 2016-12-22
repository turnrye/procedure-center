import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResourcePage } from '../resource/resource';
import { Agency } from '../../providers/agency';
import { GoogleAnalytics } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})
export class ResourcesPage {

  configuration$: Observable<any>;
  constructor(public navCtrl: NavController, public agency: Agency) {
    this.configuration$ = this.agency.configuration;
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
