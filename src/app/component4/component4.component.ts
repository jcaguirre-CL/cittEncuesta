import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { routerTransition } from '../router.animations';
import { LoggerService } from './../logger.service';

import { BookingService } from "../booking.service";
import { Hero } from '../service1.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class Component4Component implements OnInit {

  title = 'CITT AVaras';
  comentario:string = "hola";

  constructor(private logger: LoggerService, private _bookingService: BookingService)  {
    this._bookingService.comentario.subscribe( comentario => {
      this.comentario = comentario
    });
   }
  avanzar() {
    this._bookingService.comentario.next(this.comentario);
  }
  ngOnInit() {  }

}
