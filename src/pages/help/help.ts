import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

/*
  Generated class for the Help page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  constructor(public navCtrl: NavController, public platform: Platform) {}

  ionViewDidLoad() {
    console.log('Hello HelpPage Page');
  }
  launch(url) {
    window.open(url, '_system');
  }

}
