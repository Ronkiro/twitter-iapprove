import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterManagementService {

  constructor(private http: HttpClient) { }

  approve(tweet) : Observable<any> {
    return this.http.post(environment.API_URL, {
      isApproved: true,
      tweetId: tweet['id']
    });
  }

  deny(tweet) : Observable<any> {
    return this.http.post(environment.API_URL, {
      isApproved: false,
      tweetId: tweet['id']
    });
  }
}
