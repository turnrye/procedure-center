import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Agency } from '../../providers/agency';
import { GoogleAnalytics } from 'ionic-native';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  agencyForm: FormGroup;
  webFetchForm: FormGroup;
  definitionMd5: any;
  constructor(public navCtrl: NavController, public agency: Agency, private formBuilder: FormBuilder, public http: Http) {
    this.agencyForm = this.formBuilder.group({
      'rawDefinition': [JSON.stringify(this.agency.data)]
    });
    this.webFetchForm = this.formBuilder.group({
      'definitionUrl': []
    });
    this.calculateMd5();
  }
  calculateMd5() {
    this.definitionMd5 = String(Md5.hashAsciiStr(JSON.stringify(this.agencyForm.value.rawDefinition))).substring(0, 6);
  }
  ionViewDidEnter() {
    GoogleAnalytics.trackView("settings");
  }

  getWebFetchForm() {
    this.http.get(this.webFetchForm.value.definitionUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.agencyForm.patchValue({rawDefinition: JSON.stringify(data)});
      });
  }

  updateAgency() {
    this.agency.setData(this.agencyForm.value.rawDefinition);
    console.log('Got raw data');
    GoogleAnalytics.trackEvent("configuration", "changed_definition_using_raw", "", 1, false);
  }

}
