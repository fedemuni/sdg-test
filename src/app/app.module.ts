import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PodcastService } from './/services/podcast.service';
import { MainComponent } from './main/main.component'

import { MatCardModule, MatGridListModule, MatInputModule } from '@angular/material';
import { SearchPipe } from './pipes/search.pipe';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    FormsModule
  ],
  providers: [PodcastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
