import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class DataService {
  opinionAlumno:BehaviorSubject<any> = new BehaviorSubject<any>({nombre:"",correo:""});
  
  // private messageSource = new BehaviorSubject<string>("default message");
  private messageSource1 = new BehaviorSubject<any>({nombre:"", mail:""});
  private messageSource2 = new BehaviorSubject<string>("answer2");
  private messageSource3 = new BehaviorSubject<string>("answer3");
  
  currentMessage1 = this.messageSource1.asObservable();
  currentMessage2 = this.messageSource2.asObservable();
  currentMessage3 = this.messageSource2.asObservable();
  
  constructor() { }

  private subject = new Subject<any>();
  
  sendMessage(message: any) {
      this.subject.next({ any: message });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  changeMessage1(message: any) {
    this.messageSource1.next(message)
  }
  getMessage1() {
    return this.messageSource1.getValue()
  }
  changeMessage2(message: string) {
    this.messageSource1.next(message)
  }
  changeMessage3(message: string) {
    this.messageSource1.next(message)
  }
}
