import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; //REMOVE THIS

import { FriendList } from './friendlist';



@Injectable()
export class FriendService {
  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  //private statisticsUrl = 'asdf/asdf';

  getFriendList() {
    var user = JSON.parse(localStorage.getItem('user'));
    return this.http
      .get('https://django-scorekeeper-api.herokuapp.com/api/users/friendlist/' + user.pk + '/')
      .map(
      res => res.json().friends as FriendList[],
    )
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
