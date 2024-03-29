import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private buttonClickSubject = new Subject<void>();

  buttonClick$ = this.buttonClickSubject.asObservable();

  emitButtonClick() {
    this.buttonClickSubject.next();
  }
}

