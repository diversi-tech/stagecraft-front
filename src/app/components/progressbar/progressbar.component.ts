import { Component,Input, OnInit ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class progressbarComponent implements OnInit,OnChanges{
  @Input() totalParts: number = 0;
  @Input() watchedParts: number = 0;

  progress: number = 0;


  ngOnInit(): void {
    this.calculateProgress();
  }

  ngOnChanges(): void {
    this.calculateProgress();
  }

  calculateProgress(): void {
    if (this.totalParts > 0) {
      this.progress = (this.watchedParts / this.totalParts) * 100;
    }
  }
}
