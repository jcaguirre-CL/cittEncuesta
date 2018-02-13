import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { routerTransition } from '../router.animations';

import { DataService } from '../data.service';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from './../logger.service';
import { MessageService } from '../message.service';
import {BookingService} from "../booking.service";


import { Hero } from '../service1.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class Component2Component implements OnInit {
  message: any;
  subscription: Subscription;
  title = 'CITT AVaras';
  ticketCount:number = 0;
  operador: number;
  opacity1: number = 1;
  opacity2: number = 1;
  opacity3: number = 1;
  // opciones1 = [
  //   { value: '1', viewValue: 'Oper1' },
  //   { value: '2', viewValue: 'Oper2' },
  //   { value: '3', viewValue: 'Oper3' }
  // ];
  
  
  constructor(private logger: LoggerService, private data: DataService, private messageService: MessageService, private _bookingService:BookingService) { 
    // this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    // this._bookingService.totalTicketCount.subscribe(totalTicketCount => {
    //   this.ticketCount = totalTicketCount
    // });
    this._bookingService.operador.subscribe(operador => {
      this.operador = operador
    });
    // data.currentMessage1.subscribe(message => this.message = message)
    // this.logger.warn('COMPONENTE2: en constructr', this.message);
    
  }
  click1() {
    this.logger.warn('COMPONENTE2: avanzar');
    this.opacity1 = 0.5;
    this.opacity2 = 1;
    this.opacity3 = 1;
    this.operador = 1;
  }
  click2() {
    this.logger.warn('COMPONENTE2: avanzar');
    this.opacity1 = 1;
    this.opacity2 = 0.5;
    this.opacity3 = 1;
    this.operador = 2;
  }
  click3() {
    this.logger.warn('COMPONENTE2: avanzar');
    this.opacity1 = 1;
    this.opacity2 = 1;
    this.opacity3 = 0.5;
    this.operador = 3;
  }
  // bookTicket = () => {
  //   this.ticketCount = this.ticketCount + 1;
  //   this._bookingService.totalTicketCount.next(this.ticketCount);
  // };
  avanzar() {
    // this.messageService.sendMessage('Message Component2 desde avanzar!');
    this._bookingService.operador.next(this.operador);
    // this.logger.warn('COMPONENTE2: avanzar', this.message);
  }
  ngOnInit() {
    // this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    this.logger.warn('COMPONENTE2: onInit', this.message);
    // this.message = this.data.getMessage1();
    
    // this.data.getMessage1.subscribe(message => this.message = message)
      // this.subscription = this.data.getMessage().subscribe(message => { this.message1 = message; });
      
      // const dataDailySalesChart: any = {
      //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      //     series: [
      //         [12, 17, 7, 17, 23, 18, 38]
      //     ]
      // };

      // var responsiveOptions: any[] = [
      //   ['screen and (max-width: 640px)', {
      //     seriesBarDistance: 5,
      //     axisX: {
      //       labelInterpolationFnc: function (value) {
      //         return value[0];
      //       }
      //     }
      //   }]
      // ];
    // const dataCompletedTasksChart: any = {
    //   labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
    //   series: [
    //     [230, 750, 450, 300, 280, 240, 200, 190]
    //   ]
    // };
  }

}
