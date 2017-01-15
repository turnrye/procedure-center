import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserProfile } from '../models/user-profile';

@Injectable()
export class UserProfileProvider {


  private _userProfile: BehaviorSubject<UserProfile> = new BehaviorSubject(new UserProfile());
  constructor(private storage: Storage) {
    this.loadInitialData();
  }
  get userProfile(): Observable<UserProfile> {
    return new Observable(fn => this._userProfile.subscribe(fn)) as Observable<UserProfile>;
  }
  loadInitialData() {
    this.storage.get('userProfile').then((data) => {
      if (data === null || data.length === 0) {
        data = new UserProfile();
      }
      this._userProfile.next(Object.assign(new UserProfile(), data));
    });
  }

  update(userProfile) {
    console.log(userProfile);
    this.storage.set('userProfile', userProfile).then((data) => {
      this._userProfile.next(Object.assign(new UserProfile(), userProfile));
    });
  }
}
