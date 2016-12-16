import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlasgowComaScalePage } from '../glasgow-coma-scale/glasgow-coma-scale';
import { RuleOf9sPage } from '../rule-of-9s/rule-of-9s';
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
      { title: 'Glasgow Coma Scale', component: GlasgowComaScalePage },
      { title: 'Rule of 9s', component: RuleOf9sPage }
    ];

  }
  ionViewDidLoad() {
    console.log('Hello ToolsPage Page');
  }
  goToPage(event, page) {
    this.navCtrl.push(page);
  }

}
