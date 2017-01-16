import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { GoogleAnalytics } from 'ionic-native';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  configurationForm: FormGroup;
  webFetchForm: FormGroup;
  definitionMd5: any;
  hideAdvanced: boolean = true;

  constructor(public navCtrl: NavController, public configurationProvider:
  ConfigurationProvider, private formBuilder: FormBuilder, public http: Http,
  private _params: NavParams, public toastCtrl: ToastController) {
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
    this.configurationProvider.configuration.subscribe(configuration => {
      this.definitionMd5 = String(Md5.hashAsciiStr(JSON.stringify(configuration))).substring(0, 6);
    });
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("settings");
  }

  getWebFetchForm() {
    this.http.get(this.webFetchForm.value.definitionUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.configurationForm.patchValue({rawDefinition: JSON.stringify(data)});
        this.updateAgency();
      });
  }

  updateAgency() {
    try {
      var parsedConfiguration = JSON.parse(this.configurationForm.value.rawDefinition);
      this.configurationProvider.update(parsedConfiguration);
      this.toastCtrl.create({
        message: 'Configuration updated!',
        duration: 3000
      }).present();
    } catch(e) {
      console.log(e); // error in the above string (in this case, yes)!
      this.toastCtrl.create({
        message: 'There was an error processing your configuration, are you sure it is valid?',
        duration: 3000,
        showCloseButton: true
      }).present();
    }
    GoogleAnalytics.trackEvent("configuration", "changed_definition", "", 1, false);
  }

  scanBarcode() {
    BarcodeScanner.scan({formats: 'QR_CODE'}).then((barcodeData) => {
      this.webFetchForm.patchValue({definitionUrl: barcodeData.text});
    }, (err) => {
      this.toastCtrl.create({
        message: 'There was an error scanning your barcode.',
        duration: 3000,
        showCloseButton: true
      }).present();
    });
  }

  launch(url) {
    window.open(url, '_system');
  }

}
