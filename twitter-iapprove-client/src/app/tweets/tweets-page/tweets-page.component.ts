import { TwitterSearchFacadeService } from './../facades/twitter-search-facade.service';
import { ITwitterSearchResponse } from './../../core/interfaces/ITwitterSearchResponse';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './tweets-page.component.html',
  styleUrls: ['./tweets-page.component.scss']
})
export class TweetsPageComponent implements OnInit {

  tweets$: Observable<ITwitterSearchResponse>;

  constructor(private searchFacade: TwitterSearchFacadeService) { }

  ngOnInit(): void {}

  handleSearch(searchParam: string) {
    this.tweets$ = this.searchFacade.searchTweets(searchParam);
  }

}
