import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITwitterSearchResponse, TweetStatus } from './../../../core/interfaces/ITwitterSearchResponse';

export type Decision = {
  decision: boolean,
  statuses: TweetStatus[],
  tweetId: number
};

@Component({
  selector: 'tweets-page-tweets-container',
  templateUrl: './tweets-container.component.html',
  styleUrls: ['./tweets-container.component.scss']
})
export class TweetsContainerComponent implements OnInit {

  @Input() tweets: ITwitterSearchResponse;
  @Input() isLoading: boolean;

  @Output() decision = new EventEmitter<Decision>();

  constructor() { }

  ngOnInit(): void {}

  handleDecision(decision: boolean, tweetId: number): void {
    console.log(this.isLoading);
    const statuses = this.tweets.statuses;
    this.decision.emit({ decision, statuses, tweetId });
  }
}
