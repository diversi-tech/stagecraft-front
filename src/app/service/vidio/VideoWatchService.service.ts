import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoWatchServiceService {
  private watchedVideosKey = 'watchedVideos';

  constructor() { }

  hasWatched(videoId: string): boolean {
    const watchedVideos = JSON.parse(localStorage.getItem(this.watchedVideosKey) || '[]');
    return watchedVideos.includes(videoId);
  }

  setWatched(videoId: string): void {
    const watchedVideos = JSON.parse(localStorage.getItem(this.watchedVideosKey) || '[]');
    if (!watchedVideos.includes(videoId)) {
      watchedVideos.push(videoId);
      localStorage.setItem(this.watchedVideosKey, JSON.stringify(watchedVideos));
    }
  }
}
