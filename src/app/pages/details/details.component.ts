import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  podcast: any;

  constructor( 
    private router: Router,
    private route:  ActivatedRoute,
    public podcastService: PodcastService) {
     }

  ngOnInit() {
    let podcastId;
    this.route.paramMap.subscribe(pmap => podcastId = pmap.get('id'));

    this.podcastService.getPodcastById(podcastId).subscribe((podcast: any) => {
      this.podcast = {
          author: podcast.results[0].artistName,
          title: podcast.results[0].trackName,
          poster: podcast.results[0].artworkUrl60,
      }
      console.log(this.podcast);
    });
  }

}
