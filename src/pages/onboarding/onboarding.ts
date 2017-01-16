import { Component } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import { UserProfile } from '../../models/user-profile';
import { Configuration } from '../../models/configuration';
import { UserProfileProvider } from '../../providers/user-profile-provider';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { Observable } from 'rxjs/Observable';
import { ProtocolsPage } from '../protocols/protocols';
import { ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';
import 'rxjs/add/operator/first';

@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html'
})
export class OnboardingPage {
  @ViewChild(Slides) slides: Slides;
  userProfile$: Observable<UserProfile>;
  configuration$: Observable<Configuration>;
  configurationForm: FormGroup;

  constructor(public navCtrl: NavController, public userProfileProvider: UserProfileProvider, private formBuilder: FormBuilder,
   public http: Http, public configurationProvider: ConfigurationProvider, public toastCtrl: ToastController) {
    this.userProfile$ = this.userProfileProvider.userProfile;
    this.configuration$ = this.configurationProvider.configuration;
    this.configurationForm = this.formBuilder.group({
      'definitionUrl': [null, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('Hello OnboardingPage Page');
  }

  scanBarcode() {
    BarcodeScanner.scan({formats: 'QR_CODE'}).then((barcodeData) => {
      this.configurationForm.patchValue({definitionUrl: barcodeData.text});
    }, (err) => {
      this.toastCtrl.create({
        message: 'There was an error scanning your barcode.',
        duration: 3000,
        showCloseButton: true
      }).present();
    });
  }

  goToProtocols() {
    this.userProfile$.first().subscribe(userProfile => {
      userProfile.completedOnboarding = true;
      this.userProfileProvider.update(userProfile);
    });
    this.navCtrl.setRoot(ProtocolsPage);
  }

  submitConfiguration() {
    this.http.get(this.configurationForm.value.definitionUrl)
      .map(res => res.json())
      .subscribe(data => {
      try {
        this.configurationProvider.update(data);
        let toast = this.toastCtrl.create({
          message: 'Configuration updated!',
          duration: 1500
        });
        toast.onDidDismiss(() => this.slides.slideTo(1, 500));
        toast.present();
      } catch(e) {
        console.log(e); // error in the above string (in this case, yes)!
        this.toastCtrl.create({
          message: 'There was an error processing your configuration, are you sure it is valid?',
          duration: 3000,
          showCloseButton: true
        }).present();
      }
    });
  }
}
