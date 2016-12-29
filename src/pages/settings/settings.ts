import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { GoogleAnalytics } from 'ionic-native';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  configurationForm: FormGroup;
  webFetchForm: FormGroup;
  definitionMd5: any;

  constructor(public navCtrl: NavController, public configurationProvider:
  ConfigurationProvider, private formBuilder: FormBuilder, public http: Http,
  private _params: NavParams) {
    this.configurationForm = this.formBuilder.group({
      'rawDefinition': [null, Validators.required]
    });
    this.configurationProvider.configuration.subscribe(
      configuration => {
        (<FormControl>this.configurationForm.get('rawDefinition')).setValue(JSON.stringify(configuration));
      }
    );
    this.webFetchForm = this.formBuilder.group({
      'definitionUrl': [_params.get('url') ? decodeURIComponent(_params.get('url')) : null, Validators.required]
    });
    this.calculateMd5();
  }
  calculateMd5() {
    this.definitionMd5 = String(Md5.hashAsciiStr(JSON.stringify(this.configurationForm.value.rawDefinition))).substring(0, 6);
  }
  ionViewDidEnter() {
    GoogleAnalytics.trackView("settings");
  }

  getWebFetchForm() {
    this.http.get(this.webFetchForm.value.definitionUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.configurationForm.patchValue({rawDefinition: JSON.stringify(data)});
      });
  }

  updateAgency() {
    try {
      this.configurationProvider.update(JSON.parse(this.configurationForm.value.rawDefinition));
    } catch(e) {
      console.log(e); // error in the above string (in this case, yes)!
    }
    GoogleAnalytics.trackEvent("configuration", "changed_definition_using_raw", "", 1, false);
  }

  launch(url) {
    window.open(url, '_system');
  }

}
