import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TimerComponent } from './components/timer/timer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StoryComponent } from './components/story/story.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    MnFullpageDirective,
    AppComponent,
    WelcomeComponent,
    TimerComponent,
    AboutUsComponent,
    StoryComponent,
    HeaderComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJJ15_FO_jbOzV7aMROxI42Tv2HJTm8OU'
    })
  ],
  providers: [
    MnFullpageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
