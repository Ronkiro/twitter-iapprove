import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export const managementEndpoint = '/tweets';

@Injectable({
  providedIn: 'root'
})
export class TwitterManagementService {

  constructor(private http: HttpClient) { }

  approve(tweet) : Observable<any> {
    return this.http.post(environment.API_URL + managementEndpoint, {
      isApproved: true,
      tweetId: tweet['id'],
      text: tweet['text'],
      name: tweet['user']['name'],
      screenName: tweet['user']['screen_name']
    }).pipe(take(1));
  }

  deny(tweet) : Observable<any> {
    return this.http.post(environment.API_URL + managementEndpoint, {
      isApproved: false,
      tweetId: tweet['id'],
      text: tweet['text'],
      name: tweet['user']['name'],
      screenName: tweet['user']['screen_name']
    }).pipe(take(1));
  }

  deleteAll() : Observable<any> {
    return this.http.delete(environment.API_URL + managementEndpoint)
            .pipe(take(1));
  }
}
