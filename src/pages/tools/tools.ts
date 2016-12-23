import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlasgowComaScalePage } from '../glasgow-coma-scale/glasgow-coma-scale';
import { RuleOf9sPage } from '../rule-of-9s/rule-of-9s';
import { CincinnatiPrehospitalStrokeScalePage } from '../cincinnati-prehospital-stroke-scale/cincinnati-prehospital-stroke-scale';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html'
})
export class ToolsPage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Glasgow Coma Scale', component: GlasgowComaScalePage },
      { title: 'Rule of 9s', component: RuleOf9sPage },
      { title: 'Cincinnati Prehospital Stroke Scale', component: CincinnatiPrehospitalStrokeScalePage}
    ];

  }

  goToPage(event, page) {
    this.navCtrl.push(page);
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("protocol-groups");
  }

}
