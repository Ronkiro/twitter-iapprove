import { Textos } from '@shared/utils/textos';
import { MessageService } from '@core/services/message.service';
import { TwitterManagementService } from '@core/services/twitter-management.service';
import { TweetStatus } from '@core/interfaces/ITwitterSearchResponse';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TweetManagementFacadeService {

  constructor(private service: TwitterManagementService,
    private messageService: MessageService) { }

  /** handleDecision
   * @description Handles either tweet approval or tweet denial.
   * @param decision The decision from user-event.
   * @param tweets The current tweets state.
   * @param tweetId The tweet's index from tweets list.
   */
  public async handleDecision(decision: boolean,
    tweets: TweetStatus[],
    tweetId: number) {
    const errorMessage = decision? Textos.tweetApprovalError : Textos.tweetDenyError;
    const successMessage = decision? Textos.tweetApprovalSuccess : Textos.tweetDenySuccess;

    await this.sendDecisionToAPI(decision, tweets[tweetId])
      .toPromise()
      .then(
        () => { this.messageService.success(successMessage); }
      )
      .catch(
        () => this.messageService.error(errorMessage)
      );

  }

  private sendDecisionToAPI(decision: boolean, tweet: TweetStatus): Observable<any> {
    return decision ? this.service.approve(tweet) : this.service.deny(tweet);
  }
}
