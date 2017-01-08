import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigurationProvider } from '../../providers/configuration-provider';
import { Configuration } from '../../models/configuration';
import { GoogleAnalytics } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
import { NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-contacts-popover',
  templateUrl: 'contacts-popover.html'
})
export class ContactsPopoverPage {

  configuration$: Observable<Configuration>;
  setFilterTags: any;
  getFilterTags: any;
  filterForm: FormGroup;

  constructor(public navCtrl: NavController, public configurationProvider: ConfigurationProvider, private params: NavParams,
  private formBuilder: FormBuilder) {
    this.configuration$ = this.configurationProvider.configuration;
    this.setFilterTags = this.params.get('setFilterTags');
    this.getFilterTags = this.params.get('getFilterTags');
    this.configuration$.subscribe(configuration => {
      var formBuilderDefinition: any = {};
      for(let tag of configuration.getContactTagNames()) {
        formBuilderDefinition[tag] = this.getFilterTags().indexOf(tag) !== -1;
      }
      this.filterForm = this.formBuilder.group(formBuilderDefinition);
    });
    this.filterForm.valueChanges.subscribe(data => {
      var tags = Object.keys(this.filterForm.controls).filter(control => this.filterForm.get(control).value);
      this.setFilterTags(tags);
    });
  }
  ionViewDidLoad() {
    GoogleAnalytics.trackView("contacts-popover");
  }
}
