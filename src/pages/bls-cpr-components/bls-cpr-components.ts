import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-bls-cpr-components',
  templateUrl: 'bls-cpr-components.html'
})
export class BLSCPRComponentsPage {
  metronome: HTMLAudioElement;
  remainingTime: number = 0.0;

  constructor(public navCtrl: NavController) {
    this.metronome = new Audio('assets/100bpm-click-track-2min.mp3');
    setInterval(() => this.remainingTime = Math.floor(this.metronome.duration - this.metronome.currentTime), 1000);
    this.metronome.loop = true;
  }

  ionViewDidEnter() {
    GoogleAnalytics.trackView("bls-cpr-components");
  }
  ionViewWillLeave() {
    this.metronome.pause();
  }
  toggleMetronome() {
    if(this.metronome.paused) {
      this.metronome.currentTime = 0.0;
      this.metronome.play();
    } else {
      this.metronome.pause();
    }
  }
}
