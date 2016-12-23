import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ConfigurationProvider {

  private _configuration: BehaviorSubject<any>;
  private dataStore: {
    configuration: {}
  };

  constructor(private storage: Storage) {
    this.dataStore = { configuration: {} };
    this._configuration = new BehaviorSubject(null);
  }

  get configuration() {
    return this._configuration.asObservable();
  }

  loadAll() {
    this.storage.get('configuration').then((data) => {
      if (data === null || data.length === 0) {
        data = {
                  "metadata": {
                    "title": "Example EMS Treatment Guidelines",
                    "author": "Procedure Center Authors",
                    "date": "2016-12-21"
                  },
                  "contacts": [{
                    "name": "Poison Control",
                    "phone": "(800) 222-1222",
                    "address": ""
                  }],
                  "protocolGroups": [{
                    "name": "Example Protocol Group",
                    "protocols": [{
                      "id": "1",
                      "name": "Example Protocol",
                      "assessments": "This is an example protocol showing the various fields that are possible.",
                      "standingOrders": {
                        "basic": "Put steps here",
                        "intermediate": "For your team",
                        "paramedic": ""
                      },
                      "notes": "To get started, load the procedures that you have in the settings dialog."
                    }]
                  }],
                  "resources": [{
                    "name": "Example Resource",
                    "body": "You can change this using our configuration tool, available on our website at www.procedure.center"
                  }]
                };
      }
      this.dataStore.configuration = data;
      this._configuration.next(Object.assign({}, this.dataStore).configuration);
    });
  }

  update(configuration) {
    console.log(configuration);
    this.storage.set('configuration', configuration).then((data) => {
      this.dataStore.configuration = data;
      this._configuration.next(Object.assign({}, this.dataStore).configuration);
    });
  }
}
