import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../service1.service';
import { FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { LoggerService } from './../logger.service';

import { BookingService } from "../booking.service";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
 * @title Input Errors
 */
@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class Component5Component {
  operador: number;
  ranking: number;
  comentario: string;
  correo: string;
  title = 'CITT AVaras';

  constructor(private http: HttpClient, private logger: LoggerService, private _bookingService: BookingService) { 
    this._bookingService.operador.subscribe(operador => {
      this.operador = operador
    });
    this._bookingService.ranking.subscribe(ranking => {
      this.ranking = ranking
    });
    this._bookingService.comentario.subscribe(comentario => {
      this.comentario = comentario
    });
    this.logger.warn('operador: ', this.operador);
    this.logger.warn('ranking: ', this.ranking);
    this.logger.warn('comentario: ', this.comentario);
  }

  enviarNuevo(registro) {
      let body = JSON.stringify(registro);
      this.logger.warn(body);
      return this.http.post('http://localhost:3005/api', body, httpOptions);
  }

  avanzar() {

    let registro = { operador: this.operador,
                      ranking: this.ranking,
                      comentario: this.comentario,
                      correo: this.correo };
    this.enviarNuevo(registro).subscribe(
       data => {
         this.logger.warn('creando registro en db');
         return true;
       },
       error => {
         console.error("Error creando registro");
         return Observable.throw(error);
       }
    );

  }
    // const req = this.http.post('http://localhost:3005/api', {
    //   opinion1: 'opinion1',
    //   opinion2: 'opinion2',
    //   mail: 'mail@mail.cl'
    // })
    //   .subscribe(
    //   res => {
    //     this.logger.warn('enviando algo');
    //   },
    //   err => {
    //     this.logger.warn('error algo');
    //   }
    //   );
  // }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

}


