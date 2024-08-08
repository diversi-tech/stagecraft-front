import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {
  private apiUrl = `${environment.baseUrl}/VideoManager/upload-transcript`; // Update this URL to match your API endpoint

  constructor(private http: HttpClient) {}

  uploadTranscript(videoId: number, transcriptText: string): Observable<any> {
    const formData = new FormData();
    formData.append('videoId', videoId.toString());
    formData.append('text', transcriptText); // Append the text to FormData

    return this.http.post(`${this.apiUrl}`, formData).pipe(
      catchError(this.handleError) // Handle errors if needed
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
