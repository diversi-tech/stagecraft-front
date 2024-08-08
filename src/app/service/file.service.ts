import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl: string = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  // getFile(fileUrl: string): Observable<Blob> {
   
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'video/mp4',
  //     'Accept': 'application/octet-stream'
  //   });

    // Send the request to the API endpoint
   // return this.http.get(`${this.baseUrl}?url=${encodeURIComponent(fileUrl)}`, { headers, responseType: 'blob' });
  // }

   

  getVideoUrl(courseId: number, lessonId: number): Observable<string> {
    return this.http.get(`${this.baseUrl}/Video/getVideoUrl?courseId=${courseId}&lessonId=${lessonId}`, { responseType: 'text' });
}


getTranscriptUrl(videoId: number): Observable<string> {
  
  return this.http.get(`${this.baseUrl}/VideoManager/get-transcript?videoId=${videoId}`, { responseType: 'text' })

}


  getFile(url: any): Observable<Blob> {
    const encodedUrl = encodeURIComponent(url);
    const apiUrl = `${this.baseUrl}/FileUpload/view?url=${encodedUrl}`;
    
    console.log('Sending request to fetch transcript from URL:', apiUrl);  // הדפסת ה-URL שנשלח לשרת
    
    console.log(`Requesting file from: ${apiUrl}`);  // לוג בצד הלקוח
    return this.http.get(apiUrl, { responseType: 'blob' }).pipe(
        tap(response => console.log('File fetched successfully', response)),
        catchError(error => {
            console.error('Error fetching file', error);
            return throwError(error);
        })
    );
}



}
