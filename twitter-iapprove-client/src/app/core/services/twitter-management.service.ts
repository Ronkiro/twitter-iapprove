import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterManagementService {

  constructor(private http: HttpClient) { }

  approve(tweet) : Observable<any> {
    return this.http.post('approveUrl', {
      tweet: tweet
    });
  }

  deny(tweet) : Observable<any> {
    return this.http.post('denyUrl', {
      tweet: tweet
    });
  }
}
