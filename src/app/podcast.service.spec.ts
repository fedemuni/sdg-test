import { TestBed, inject } from '@angular/core/testing';

import { PodcastService } from './podcast.service';

describe('PodcastServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodcastService]
    });
  });

  it('should be created', inject([PodcastService], (service: PodcastService) => {
    expect(service).toBeTruthy();
  }));
});
