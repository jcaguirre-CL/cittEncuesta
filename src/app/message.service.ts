import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { LoggerService } from './logger.service';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();
    private logger: LoggerService;
    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        // let currentValue = this.subject.getValue();
        return this.subject.asObservable();
        // this.logger.warn('COMPONENTE2: avanzar');
    }
}