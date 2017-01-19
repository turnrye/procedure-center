import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-start-triage',
  templateUrl: 'start-triage.html'
})
export class StartTriagePage {
  previous: Array<any> = [];
  logic: any = {
    "type": "question",
    "name": "Able to walk?",
    "answers": [
      {
        "type": "endpoint",
        "answer": "yes",
        "id": "minor"
      },
      {
        "type": "question",
        "answer": "no",
        "name": "Spontaneous breathing",
        "answers": [
          {
            "type": "question",
            "answer": "yes",
            "name": "Respiratory Rate",
            "answers": [
              {
                "answer": "<30",
                "type": "question",
                "name": "Perfusion",
                "answers": [
                  {
                    "answer": "Radial pulse absent or<br>capillary refill > 2 sec",
                    "type": "endpoint",
                    "id": "immediate"
                  },
                  {
                    "answer": "Radial pulse present or<br>capillary refill < 2 sec",
                    "type": "question",
                    "name": "Mental status",
                    "answers": [
                      {
                        "answer": "Doesn't obey commands",
                        "type": "endpoint",
                        "id": "immediate"
                      },
                      {
                        "answer": "Obeys commands",
                        "type": "endpoint",
                        "id": "delayed"
                      }
                    ]
                  }
                ]
              },
              {
                "answer": ">30",
                "type": "endpoint",
                "id": "immediate"
              }
            ]
          },
          {
            "type": "question",
            "answer": "no",
            "name": "Position airway",
            "answers": [
              {
                "answer": "Spontaneous breathing",
                "type": "endpoint",
                "id": "immediate"
              },
              {
                "answer": "APNEA",
                "type": "endpoint",
                "id": "expectant"
              }
            ]
          }
        ]
      }
    ]
  };

  endpoints: any = {
    "minor": {
      "color": "green500",
      "name": "Minor",
      "message": "<ul><li>Victim with relatively minor injuries</li><li>Status\
       unlikely to deteriorate over days</li><li>May be able to assist in own\
        care: \"Walking Wounded\"</li></ul>"
    },
    "delayed": {
      "color": "yellow500",
      "name": "Delayed",
      "message": "<ul><li>Victim's transport can be delayed</li><li>Includes\
       esrious and potentially life-threatening injuries, but status not\
        expected to deteriorate significantly over several hours</li></ul>"
    },
    "immediate": {
      "color": "red500",
      "name": "Immediate",
      "message": "<ul><li>Victim can be helped by immediate intervention and\
       transport</li><li>Requires medical attention with minutes for survival\
        (up to 60)</li><li>Includes compromises to patient's Airway, Breathing,\
         Circulation</li></ul>"
    },
    "expectant": {
      "color": "black",
      "name": "Expectant",
      "message": "<ul><li>Victim unlikely to survive given severity of\
       injuries, level of available care, or both</li><li>Palliative care and\
        pain relief should be provided</li></ul>"
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
    GoogleAnalytics.trackView("start-triage");
  }


}
