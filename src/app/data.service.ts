import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private receiptSource = new BehaviorSubject<File | null>(null);
  currentReceipt = this.receiptSource.asObservable();

  constructor() { }

  updateReceipt(receipt: File) {
    this.receiptSource.next(receipt);
  }
}