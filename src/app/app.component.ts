import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})


export class AppComponent {
  title = 'project';
  totalParts: number = 30;
  watchedParts: number = 19;
}
