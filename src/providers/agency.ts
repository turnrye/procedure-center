import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



/*
  Generated class for the Agency provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Agency {
  data: any; //example data is here: https://gist.githubusercontent.com/ryanturner/7db2dd7ec59ca0163812faa8f55cf6f5/raw/3a8ce0c9640868d2118a4388e803e0e2d1c2b22c/test.json
  originalData: any;

  constructor(private storage: Storage) {
    console.log('Hello Agency Provider');
    this.load();
  }

  setData(data: any) {
    var parsedData: any;
    if (data == null || data.length == 0) {
      parsedData = {"contacts":[{"name": "Poison Control","phone": "(800) 222-1222","address": ""}],"protocolGroups":[{"name":"Example Protocol Group","protocols":[{"id":"1","name":"Example Protocol","assessments":"This is an example protocol showing the various fields that are possible.","standingOrders":{"basic":"Put steps here","intermediate":"For your team","paramedic":""},"notes":"To get started, load the procedures that you have in the settings dialog."}]}],"resources":[{"name":"Example Resource","body":"You can change this using our configuration tool, available on our website at www.procedure.center"}]};
    } else {
      parsedData = JSON.parse(data);
    }
    this.storage.set('agencyData', parsedData);
    this.data = parsedData;
    this.originalData = JSON.parse(JSON.stringify(parsedData));
  }

  load() {
    if (this.data) {
      this.data = JSON.parse(JSON.stringify(this.originalData));
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.storage.get('agencyData').then((data) => {
        this.setData((!data) ? null : JSON.stringify(data));
        resolve(this.data);
      });
    });
  }
}
