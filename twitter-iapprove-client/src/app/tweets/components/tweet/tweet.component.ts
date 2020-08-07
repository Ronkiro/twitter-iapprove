import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'tweets-page-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetComponent implements OnInit {
  @Input() text: string;
  @Input() retweets: number;
  @Input() favorites: number;
  @Input() createdAt: string;
  @Input() nickname: string;
  @Input() realname: string;
  @Input() profileImg: string;

  @Output() decision = new EventEmitter<boolean>();

  ngOnInit(): void {}

  handleApproval() {
    this.decision.emit(true);
  }

  handleDenial() {
    this.decision.emit(false);
  }

}
