import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class ConfigurationRepositoryProvider {

  constructor (public http: Http) {

  }

  getAll() {
    return this.http.get('http://procedure.center/config/repository.json')
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
