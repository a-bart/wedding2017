import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DesignerService {
  private headers = new Headers();

  base_local = 'http://127.0.0.1:3000/';
  userUrl = this.base_local + 'api/user';

  constructor(private http: Http) {
    this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('profile'));
  }

  getUsers() {
    return this.http.get(this.userUrl)
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError);
  }

  postUser(body: Object) {
    return this.http.post(this.userUrl, body)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}