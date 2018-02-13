import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { routerTransition } from '../router.animations';
import { Hero } from '../service1.service';
import { LoggerService } from './../logger.service';
import { BookingService } from "../booking.service";

import { DataService } from '../data.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 * @title Input Errors
 */
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class Component3Component implements OnInit {
  opinion1:string;
  message:string;
  title = 'CITT AVaras';
  value:number = 4;

  constructor(private data: DataService, private logger: LoggerService, private _bookingService: BookingService) {
    this._bookingService.ranking.subscribe(ranking => {
      this.value = ranking
    });
   }

  ngOnInit() {
    this.logger.warn('COMPONENTE3: onInit', this.value);
  }

  avanzar() {
    this._bookingService.ranking.next(this.value);
  }

}


