import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class BookingService {
   operador: BehaviorSubject<number> = new BehaviorSubject<number>(0);
   ranking: BehaviorSubject<number> = new BehaviorSubject<number>(3);
   comentario: BehaviorSubject<string> = new BehaviorSubject<string>("");
   correo: BehaviorSubject<string> = new BehaviorSubject<string>("");
}