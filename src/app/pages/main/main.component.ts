import { Component, OnInit, ViewChild } from '@angular/core';
import { PodcastService } from '../../services/podcast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('podcastsCount') filteredItems;
  /**
   * Search by author or title
   */
  searchText: string;
  /**
   * Contains Podcast to show
   */
  podcasts: any;
  /**
   * Injectors here
   * @param podcastService Injected podcast service
   */
  constructor( 
    public podcastService: PodcastService,
    private router: Router) { 
    }

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

  onSelect(podcast: any) {
    this.router.navigate(['../details', podcast.id ]);
  }

}
