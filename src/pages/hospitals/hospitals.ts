import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Agency } from '../../providers/agency';
/*
  Generated class for the Hospitals page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hospitals',
  templateUrl: 'hospitals.html'
})
export class HospitalsPage {

  constructor(public navCtrl: NavController, private agency: Agency) {}

  ionViewDidLoad() {
    console.log('Hello HospitalsPage Page');
  }

}
