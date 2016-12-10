import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Agency } from '../../providers/agency';

/*
  Generated class for the Protocols page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-protocols',
  templateUrl: 'protocols.html'
})
export class ProtocolsPage {

searchQuery: string = '';
 protocolGroups: any;

 constructor(public navCtrl: NavController, private agency: Agency) {
   this.protocolGroups = this.agency.data.protocolGroups;
 }

 getItems(ev: any) {
   // Reset items back to all of the items
   this.protocolGroups = this.agency.data.protocolGroups;

   // set val to the value of the searchbar
   let val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.protocolGroups = this.protocolGroups.filter((item) => {
       return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.keywords.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
 }

}
