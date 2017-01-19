import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-trauma-triage',
  templateUrl: 'trauma-triage.html'
})
export class TraumaTriagePage {
  previous: Array<any> = [];
  logic: any = {
    "type": "question",
    "name": "Action",
    "value": "Measure vital signs and level of consciousness",
    "answers": [
      {
        "type": "question",
        "answer": "ok",
        "name": "Step One",
        "value":  "<ul><li>Glasgow Coma Scale <= 13</li><li>Systolic blood \
        pressure (mm Hg) < 90 mmHg</li><li>Respiratory rate < 10 or > 29 \
        breaths/min (<20 in infant aged < 1 year) or need for ventilatory \
        support</li></ul>",
        "answers": [
          {
            "type": "endpoint",
            "answer": "yes",
            "id": "alpha"
          },
          {
            "type": "question",
            "answer": "no",
            "name": "Action",
            "value": "Assess anatomy of injury",
            "answers": [
              {
                "type": "question",
                "answer": "ok",
                "name": "Step Two",
                "value": "<ul><li>All penetrating injuries to head, neck, \
                torso, and extremities promixal to elbow or knee</li><li>Chest \
                wall instability or deformitiy (eg. flail chest)</li><li>Two \
                or more proximal long-bone fractures</li><li>Crushed, \
                delonged, mangled, or pulseless extremity</li><li>Pelvic \
                fractures</li><li>Open or depressed skull fracture</li>\
                <li>Paralysis</li></ul>",
                "answers": [
                  {
                    "type": "endpoint",
                    "answer": "yes",
                    "id": "alpha"
                  },
                  {
                    "answer": "no",
                    "type": "question",
                    "name": "Action",
                    "value": "Assess mechanism of injury and evidence of high-energy impact",
                    "answers": [
                      {
                        "type": "question",
                        "answer": "ok",
                        "name": "Step Three",
                        "value": "<ul><li>Falls<ul><li>Adults: >20 feet (one \
                        story is equal to 10 feet)</li><li>Children: >10 feet \
                        or two or three times the height of the child</li></ul>\
                        </li><li>High-risk auto crash<ul><li>Intrusion, \
                        **including roof: >12 inches occupant-site; >18 \
                        inches any site</li><li>Ejection (partial or complete) \
                        from automobile</li><li>Death in same passenger \
                        compartment</li><li>Vehicle telemetry data consistent \
                        with a high risk of injury</li></ul></li><li>Auto vs. \
                        pedestrian/bicyclist thrown, run over, or with \
                        significant (>20 mph) impact</li><li>Motorocycle crash \
                        >20 mph</li></ul>",
                        "answers": [
                          {
                            "type": "endpoint",
                            "answer": "yes",
                            "id": "bravo"
                          },
                          {
                            "type": "question",
                            "answer": "no",
                            "value": "Assess special patient or system considerations",
                            "answers": [
                              {
                                "type": "question",
                                "answer": "ok",
                                "name": "Step Four",
                                "value": "<ul><li>Older adults<ul><li>Risk of \
                                injury/death increases after age 55 years</li>\
                                <li>Systolic blood pressure < 110 might \
                                represent shock after age 65 years</li><li>Low \
                                impact mechanisms (eg, ground level falls) \
                                might result in severe injury</li></ul>\
                                <li>Children<ul><li>Should be triaged \
                                preferentially to pediatric capable trauma \
                                centers</li></ul></li><li>Anticoagulants and \
                                bleeding disorders<ul><li>Patients with head \
                                injury are at high risk for rapid deterioration\
                                </li></ul></li><li>Burns<ul><li>Without other \
                                trauma mechanism: triage to burn facility</li>\
                                <li>With trauma mechanism: triage to trauma \
                                center</li></ul></li><li>Pregnancy >20 weeks\
                                </li><li>EMS provider judgment</li></ul>",
                                "answers": [
                                  {
                                    "answer": "yes",
                                    "type": "endpoint",
                                    "id": "charlie"
                                  },
                                  {
                                    "answer": "no",
                                    "type": "endpoint",
                                    "id": "transport",
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  endpoints: any = {
    "alpha": {
      "color": "red500",
      "name": "Alpha",
      "message": "<p>Transport to a trauma center. Steps One and Two attempt \
      to identify the most seriously injured patients. These patients should \
      be transported preferentially to the highest level of care within the \
      defined trauma system.</p>"
    },
    "bravo": {
      "color": "orange500",
      "name": "Bravo",
      "message": "<o>Transport to a trauma center, which, depending upon the \
      defined trauma system, need not be the highest level trauma center.</p>"
    },
    "charlie": {
      "color": "yellow500",
      "name": "Charlie",
      "message": "<p>Transport to a trauma center or hospital capable of \
      timely and thorough evaluation and initial management of potentially \
      serious injuries. Consider consultation with medical control.</p>"
    },
    "transport": {
      "color": "green500",
      "name": "Transport",
      "message": "<p>Transport according to protocol</p>"
    }
  };

  constructor(public navCtrl: NavController) {}

  getNextNode(answer: any) {
    this.previous.push(this.logic);
    this.logic = answer;
  }
  back() {
    this.logic = this.previous[this.previous.length - 1];
    this.previous.pop();
  }
  startOver() {
    this.logic = this.previous[0];
    this.previous = [];
  }
  ionViewDidLoad() {
    GoogleAnalytics.trackView("trauma-triage");
  }


}
