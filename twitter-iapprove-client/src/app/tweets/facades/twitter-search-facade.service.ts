import { TwitterService } from './../../core/services/twitter.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITwitterSearchResponse } from 'src/app/core/interfaces/ITwitterSearchResponse';

@Injectable({
  providedIn: 'root'
})
export class TwitterSearchFacadeService {

  constructor(private service: TwitterService) { }

  searchTweets(queryString: string,
    count = 15,
    resultType: 'mixed' | 'recent' | 'popular' = 'recent') : Observable<ITwitterSearchResponse> {
      return this.service.searchTweets(
        queryString,
        count,
        resultType
      );
    }
}
