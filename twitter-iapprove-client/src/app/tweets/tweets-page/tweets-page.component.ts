import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Decision } from '../components/tweets-container/tweets-container.component';
import { TweetManagementFacadeService } from '../facades/tweet-management-facade.service';
import { ITwitterSearchResponse } from './../../core/interfaces/ITwitterSearchResponse';
import { TwitterSearchFacadeService } from './../facades/twitter-search-facade.service';

@Component({
  templateUrl: './tweets-page.component.html',
  styleUrls: ['./tweets-page.component.scss']
})
export class TweetsPageComponent implements OnInit {

  tweets$: Observable<ITwitterSearchResponse>;
  searchParam: string = "";
  isLoading = false;

  constructor(private searchFacade: TwitterSearchFacadeService,
    private managementFacade: TweetManagementFacadeService) { }

  ngOnInit(): void { }

  handleSearch(searchParam: string) {
    this.isLoading = true;
    this.searchParam = searchParam;
    this.tweets$ = this.searchFacade.searchTweets(searchParam);
    window.setInterval(() => this.isLoading = false, 1500);
  }

  handleDecision(params: Decision) {
    const { decision, statuses, tweetId } = params;
    this.managementFacade.handleDecision(decision, statuses, tweetId)
                        .then(() => this.handleSearch(this.searchParam));
  }
}
