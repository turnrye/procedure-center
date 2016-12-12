import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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

  constructor(public http: Http, private storage: Storage) {
    console.log('Hello Agency Provider');
    this.data = null;
    this.load();
  }

  setData(data: string) {
    var parsedData: any = JSON.parse(data);
    this.storage.set('agencyData', parsedData);
    this.data = parsedData;
    this.originalData = JSON.parse(JSON.stringify(this.data));
  }

  getFromUrl(url: string) {
    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          this.originalData = JSON.parse(JSON.stringify(this.data));
          resolve(data);
        });
    });
  }

  load() {
    if (this.data) {
      this.data = JSON.parse(JSON.stringify(this.originalData));
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.storage.get('agencyData').then((data) => {
        this.data = data;
        this.originalData = JSON.parse(JSON.stringify(this.data));
        resolve(this.data);
      });
    });
  }
}
