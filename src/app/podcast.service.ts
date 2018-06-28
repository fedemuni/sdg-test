import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  private apiUrl = 'https://itunes.apple.com'; // PROD

  constructor( public http: HttpClient ) { }

  getPodcasts() {
    return this.http.get(this.apiUrl + '/us/rss/toppodcasts/limit=100/genre=1310/json')
  }

  getPodcastById(id)  {
    return this.http.get(this.apiUrl + '/itunes.apple.com/lookup/' + id)
  }

}
