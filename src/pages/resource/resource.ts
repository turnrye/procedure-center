import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the Resource page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resource',
  templateUrl: 'resource.html'
})
export class ResourcePage {
  resource: any;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.resource = navParams.get('resource');
  }

  ionViewDidLoad() {
    console.log('Hello ResourcePage Page');
  }

}
