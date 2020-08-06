import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tweets', loadChildren: './tweets/tweets.module#TweetsModule' },
  { path: '', redirectTo: 'tweets', pathMatch: 'full' },
  { path: '**', redirectTo: 'tweets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
