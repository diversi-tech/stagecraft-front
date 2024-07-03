import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TranscriptSegment {
  time: number;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {
  private apiUrl = 'http://localhost:5128/api/Transcription/transcription';

  constructor(private http: HttpClient) {}

  getTranscript(videoId: number): Observable<TranscriptSegment[]> {
    return this.http.get<TranscriptSegment[]>(`${this.apiUrl}/${videoId}`);
  }
}
