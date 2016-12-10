import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Agency provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Agency {
  data: any;

  constructor(public http: Http) {
    console.log('Hello Agency Provider');
    this.data = null;
    this.load();
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
//      this.http.get('path/to/data.json')
//        .map(res => res.json())
//        .subscribe(data => {
          this.data = {
  "hospitals": [
    {
      "name": "Methodist Olive Branch Hospital",
      "phone": "(662) 932-9000",
      "address": "4250 Bethel Rd, Olive Branch, MS 38654"
    },
    {
      "name": "Baptist Memorial Hospital Desoto",
      "phone": "(662) 772-4000",
      "address": "7601 Southcrest Pkwy, Southaven, MS 38671"
    }
  ],
  "protocolGroups": [
    {
      "name": "Operations",
      "keywords": ["test", "duck"]
    },
    {
      "name": "Medical Protocols",
      "id": "2",
      "keywords": [],
      "protocols": [
        {
          "id": "2.0A",
          "group": "Medical Protocols",
          "name": "Abdominal pain (Non Traumatic), Adult",
          "standing-orders": {
            "emt": "Routine Patient Care, Abdominal history and physical exam, maintain the patient NPO, Allow patient to assume a position of comfort, Acquire and transmit 12-lead ECG, if available, for patients > 40, Minimize scene time, If patient has uncontrolled pain, unstable vital signs, or signs and symptoms of an acute abdomen, call for Paramedic intercept, if available. if not available, call fro AEMT intercept.",
            "aemt": "Establish IV access, If patient is hypotensive, see Shock Protocol; contact Medical Direction for fluid orders",
            "emtp": "See pain management, see nausea/vomiting, assess and monitor the cardiac rhythm, treat as indicated"
          },
          "PEARLS": "Ask the patient blah"
        }
      ]
    },
    {
      "name": "Resuscitation",
      "keywords": []
    },
    {
      "name": "Respiratory",
      "keywords": []
    },
    {
      "name": "Cardiac",
      "keywords": []
    },
    {
      "name": "Trauma & Environmental",
      "keywords": []
    },
    {
      "name": "Medical & Ob/Gyn",
      "keywords": []
    },
    {
      "name": "Behavioral & Poisoning",
      "keywords": []
    },
    {
      "name": "Special Considerations",
      "keywords": []
    }
  ],
  "drugs": []
};
          resolve(this.data);
//        });
    });
  }
}
