import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { routerTransition } from '../router.animations';
import { Hero } from '../service1.service';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { LoggerService } from './../logger.service';

import {BookingService} from "../booking.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  providers: [DataService]
})

// export class Component1Component {
export class Component1Component implements OnInit {
  ticketCount:number = 0;
  opinion1:string;
  opinionAlumno:any = {nombre:"",correo:""};
  suscrito : Observable<any>;
  title = 'CITT AVaras';
  message:any;
  nombreAlumno:string = "juancarlos";
  // message1:any;
  subscription: Subscription;
    // private logger: LoggerService;
  

  constructor(private logger: LoggerService, private data: DataService, private messageService: MessageService, private _bookingService:BookingService) {
    // this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    // data.currentMessage1.subscribe(message => this.message = message)
    // this.suscrito.currentMessage1.subscribe(message => this.message = message)
      // logger.warn('COMPONENTE1: logger.warn()');
      // this.suscrito = this.data.getMessage1().subscribe(message => { this.message = message; });
      this.data.opinionAlumno.subscribe(opinionAlumno => {
        this.opinionAlumno = opinionAlumno
    });
  //   this._bookingService.totalTicketCount.subscribe(totalTicketCount => {
  //     this.ticketCount = totalTicketCount
  // });
  //   this._bookingService.opinion1.subscribe(opinion1 => {
  //     this.opinion1 = opinion1
  //   });
  }
  agregarNombre = () => {
      let nombreAlumno = this.nombreAlumno;
      this.data.opinionAlumno.next({nombre:nombreAlumno,correo:""});
      // this.ticketCount = this.ticketCount - 1;
      // this._bookingService.totalTicketCount.next(this.ticketCount);
  }
  avanzar() {
    // this._bookingService.totalTicketCount.next(this.ticketCount);
    // private logger: LoggerService;
    // this.data.changeMessage1({nombre:"juan", mail:""});
    // this.data.sendMessage({nombre:"juan", mail:""});
    // this.messageService.sendMessage('Message from Home Component to App Component!');
    // this.logger.warn('COMPONENTE1: ', this.message);
    
  }
  ngOnInit() {
    
    // this.data.currentMessage1.subscribe(message => this.message = message)
  
  }

  //     const programas = ["hbhb","uhuhu","oioioioi"];

  //     const dataDailySalesChart: any = {
  //         labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  //         series: [
  //             [12, 17, 7, 17, 23, 18, 38]
  //         ]
  //     };

  //     const dataCompletedTasksChart: any = {
  //         labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
  //         series: [
  //             [230, 750, 450, 300, 280, 240, 200, 190]
  //         ]
  //     };

  //     var dataEmailsSubscriptionChart = {
  //       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //       series: [
  //         [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

  //       ]
  //     };
  //     var optionsEmailsSubscriptionChart = {
  //         axisX: {
  //             showGrid: false
  //         },
  //         low: 0,
  //         high: 1000,
  //         chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
  //     };
  //     var responsiveOptions: any[] = [
  //       ['screen and (max-width: 640px)', {
  //         seriesBarDistance: 5,
  //         axisX: {
  //           labelInterpolationFnc: function (value) {
  //             return value[0];
  //           }
  //         }
  //       }]
  //     ];
  // }

}
