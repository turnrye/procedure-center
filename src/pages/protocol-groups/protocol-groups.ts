import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Agency } from '../../providers/agency';
import { ProtocolsPage } from '../protocols/protocols';
import { GoogleAnalytics } from 'ionic-native';

/*
  Generated class for the ProtocolGroups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-protocol-groups',
  templateUrl: 'protocol-groups.html'
})
export class ProtocolGroupsPage {

searchQuery: string = '';
 protocolGroups: any;
 protocolsPage: any;

 constructor(public navCtrl: NavController, public agency: Agency) {
  this.agency.load().then((data) => {
    this.protocolGroups = data.protocolGroups;
  });
 }

 getItems(ev: any) {
   // Reset items back to all of the items
   this.agency.load().then((data) => {
     this.protocolGroups = data.protocolGroups;

     // set val to the value of the searchbar
     let val = ev.target.value;

     // if the value is an empty string don't filter the items
     if (val && val.trim() !== '') {
       this.protocolGroups = this.protocolGroups.filter((item) => {
         return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.keywords.toString().toLowerCase().indexOf(val.toLowerCase()) >
          -1);
       });
     }
   });
 }
 protocolGroupTapped(event, protocolGroup) {
     this.navCtrl.push(ProtocolsPage, {
       protocolGroup: protocolGroup
     });
  }
  ionViewDidEnter() {
    GoogleAnalytics.trackView("protocol-groups");
  }
}
