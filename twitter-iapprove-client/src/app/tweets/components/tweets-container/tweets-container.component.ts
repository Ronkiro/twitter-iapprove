import { Component, Input, OnInit } from '@angular/core';
import { ITwitterSearchResponse } from './../../../core/interfaces/ITwitterSearchResponse';
import { TweetManagementFacadeService } from './../../facades/tweet-management-facade.service';

@Component({
  selector: 'tweets-page-tweets-container',
  templateUrl: './tweets-container.component.html',
  styleUrls: ['./tweets-container.component.scss']
})
export class TweetsContainerComponent implements OnInit {

  @Input() tweets: ITwitterSearchResponse;

  constructor(private managementFacade: TweetManagementFacadeService) { }

  ngOnInit(): void {}

  handleDecision(decision: boolean, tweetId: number): void {
    this.managementFacade.handleDecision(decision, this.tweets.statuses, tweetId);
  }
}
