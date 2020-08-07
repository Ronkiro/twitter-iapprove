import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GloboIconComponent } from './shared/components/globo-icon/globo-icon.component';
import { FooterComponent } from './shared/containers/footer/footer.component';
import { HeaderComponent } from './shared/containers/header/header.component';
import { TweetsModule } from './tweets/tweets.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GloboIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    TweetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
