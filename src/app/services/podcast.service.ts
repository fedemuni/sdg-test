import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    let params = new HttpParams()
    .set('id', id)
    return this.http.get('https://crossorigin.me/' + this.apiUrl + '/lookup?' + params)
  }

}
