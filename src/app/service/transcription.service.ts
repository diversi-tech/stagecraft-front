import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface TranscriptSegment {
  time: number;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {
  private apiUrl = `${environment.baseUrl}/Transcription/transcription`;

  constructor(private http: HttpClient) {}

  getTranscript(videoId: number): Observable<TranscriptSegment[]> {
    return this.http.get<TranscriptSegment[]>(`${this.apiUrl}/${videoId}`);
  }
}
