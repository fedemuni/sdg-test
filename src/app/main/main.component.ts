import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';
import { Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  /**
   * Contains Podcast to show
   */
  podcasts: any;
  /**
   * Injectors here
   * @param podcastService Injected podcast service
   */
  constructor( public podcastService: PodcastService ) { }

  ngOnInit() {
    this.podcastService.getPodcasts().subscribe((response: any) => {
      let items = response.feed.entry;
      this.podcasts = items.map(podcast => {
        return {
          id: podcast.id.attributes['im:id'],
          title: podcast['im:name'].label,
          poster: podcast['im:image'][2].label,
          author: podcast['im:artist'].label,
        }
      });
      console.log(this.podcasts);
    })
  }

}
