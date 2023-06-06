import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  dataSource = new BehaviorSubject<string>('');

  source$ = this.dataSource.asObservable();

  sendNotification(data: string) {
    this.dataSource.next(data);
  }
}
