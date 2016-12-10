import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Agency } from '../../providers/agency';
import { ProtocolPage } from '../protocol/protocol';

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
 protocolGroup: any;
 originalProtocolGroup: any;

 constructor(public navCtrl: NavController, public agency: Agency, navParams: NavParams) {
   this.protocolGroup = this.agency.data.protocolGroups.find(protocolGroup => protocolGroup.id === navParams.get('protocolGroup').id);
 }

 getItems(ev: any) {
   // Reset items back to all of the items
   this.agency.load();
   this.protocolGroup = this.agency.data.protocolGroups.find(protocolGroup => protocolGroup.id === this.protocolGroup.id);

   // set val to the value of the searchbar
   let val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.protocolGroup.protocols = this.protocolGroup.protocols.filter((item) => {
       return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
 }
 protocolTapped(event, protocol) {
     this.navCtrl.push(ProtocolPage, {
       protocol: protocol
     });
  }

}
