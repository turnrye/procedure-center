import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlasgowComaScalePage } from '../glasgow-coma-scale/glasgow-coma-scale';
import { RuleOf9sPage } from '../rule-of-9s/rule-of-9s';
import { CincinnatiPrehospitalStrokeScalePage } from '../cincinnati-prehospital-stroke-scale/cincinnati-prehospital-stroke-scale';
import { GoogleAnalytics } from 'ionic-native';
import { BLSCPRComponentsPage } from '../bls-cpr-components/bls-cpr-components';
import { ApgarScorePage } from '../apgar-score/apgar-score';
import { FacesPainScalePage } from '../faces-pain-scale/faces-pain-scale';
import { StartTriagePage } from '../start-triage/start-triage';
import { TraumaTriagePage } from '../trauma-triage/trauma-triage';
import { RevisedTraumaScorePage } from '../revised-trauma-score/revised-trauma-score';

@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html'
})
export class ToolsPage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Glasgow Coma Scale', component: GlasgowComaScalePage },
      //{ title: 'Rule of 9s', component: RuleOf9sPage },
      { title: 'Cincinnati Prehospital Stroke Scale', component: CincinnatiPrehospitalStrokeScalePage},
      { title: 'Summary of High-Quality CPR Components for BLS Providers', component: BLSCPRComponentsPage },
      { title: 'Apgar Score', component: ApgarScorePage },
      { title: 'Faces Pain Scale', component: FacesPainScalePage },
      { title: 'Revised Trauma Score', component: RevisedTraumaScorePage },
      { title: 'START Triage', component: StartTriagePage },
      { title: 'Trauma Triage', component: TraumaTriagePage }
    ];

  }

  goToPage(event, page) {
    this.navCtrl.push(page);
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("protocol-groups");
  }

}
