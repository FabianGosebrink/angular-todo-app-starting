import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommunicatonService {
  dataSource = new BehaviorSubject<any>(null);

  data = this.dataSource.asObservable();

  throwEvent(data: any) {
    this.dataSource.next(data);
  }
}
