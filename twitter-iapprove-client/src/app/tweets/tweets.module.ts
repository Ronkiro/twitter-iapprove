import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MomentPipe } from '@shared/pipes/moment.pipe';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetsContainerComponent } from './components/tweets-container/tweets-container.component';
import { TweetsPageComponent } from './tweets-page/tweets-page.component';
import { TweetsRoutingModule } from './tweets-routing.module';



@NgModule({
  declarations: [
    TweetsPageComponent,
    TweetsContainerComponent,
    TweetComponent,
    MomentPipe,
    SearchContainerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TweetsRoutingModule
  ]
})
export class TweetsModule { }
