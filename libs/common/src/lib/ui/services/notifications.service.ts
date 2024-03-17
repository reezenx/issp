import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private loadingQueue: Array<number> = new Array<number>();
  private emitLoading = new BehaviorSubject<boolean>(false);
  loading$ = this.emitLoading.asObservable();

  incrementLoadingQueue() {
    this.loadingQueue.push(1);
    this.emitLoading.next(true);
  }

  decrementLoadingQueue() {
    if (this.loadingQueue.length > 0) {
      this.loadingQueue.splice(0, 1);
    }
    if (this.loadingQueue.length === 0) {
      this.emitLoading.next(false);
    }
  }
}
