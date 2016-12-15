import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlasgowComaScalePage } from '../glasgow-coma-scale/glasgow-coma-scale';
/*
  Generated class for the Tools page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html'
})
export class ToolsPage {
  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Glasgow Coma Scale', component: GlasgowComaScalePage }
    ];

  }
  ionViewDidLoad() {
    console.log('Hello ToolsPage Page');
  }
  goToPage(event, page) {
    this.navCtrl.push(page);
  }

}
