import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Drugs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-drugs',
  templateUrl: 'drugs.html'
})
export class DrugsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DrugsPage Page');
  }

}
