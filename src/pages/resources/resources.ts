import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResourcePage } from '../resource/resource';
import { Agency } from '../../providers/agency';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})
export class ResourcesPage {

  resources: any;
  constructor(public navCtrl: NavController, public agency: Agency) {
    this.agency.load().then((data) => {
      this.resources = data.resources;
    });
  }

  ionViewDidLoad() {
    console.log('Hello ResourcesPage Page');
  }
  goToPage(event, resource) {
    this.navCtrl.push(ResourcePage, {
      resource: resource
    });
  }

}
