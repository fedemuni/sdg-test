import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PodcastService } from './podcast.service';
import { MainComponent } from './main/main.component'
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [PodcastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
