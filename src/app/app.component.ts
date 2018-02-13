import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { NavigationExtras, Router, RouterLink } from '@angular/router';

// import { trigger, state, style, animate, transition } from '@angular/animations';

import { Hero } from './service1.service';
// import { Component1Component } from './component1/component1.component';
// import { Component2Component } from './component2/component2.component';
// import { AppRouting } from './app.routing';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { LoggerService } from './logger.service';
import { DataService } from "./data.service";

// declare const $: any;
// declare interface RouteInfo {
//     path: string;
//     title: string;
//     icon: string;
//     class: string;
// }
// export const ROUTES: RouteInfo[] = [
//     { path: 'component1', title: 'Component1',  icon: 'list', class: '' },
//     { path: 'component2', title: 'Component2',  icon: 'list', class: '' },
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
// export class AppComponent implements OnInit {
  title = 'qqq';
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  menuItems: any[];

  message:string;

  states: any[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    }
  ];

  constructor(public router: Router, private logger: LoggerService) {

    // Incorrect source file name and line number :(
    logger.invokeConsoleMethod( 'info', 'AppComponent: logger.invokeConsoleMethod()');
    logger.invokeConsoleMethod( 'warn', 'AppComponent: logger.invokeConsoleMethod()');
    logger.invokeConsoleMethod( 'error', 'AppComponent: logger.invokeConsoleMethod()');

    // Correct source file name and line number :)
    logger.info('AppComponent: logger.info()');
    logger.warn('AppComponent: logger.warn()');
    logger.error('AppComponent: logger.error()');

    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.states.slice());
  }

  //   ngOnInit() {
  //     // $.material.options.autofill = true;
  //     // $.material.init();
  //     this.menuItems = ROUTES.filter(menuItem => menuItem);

  // }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ir() {
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
    this.router.navigate(['component1'], navigationExtras);
  }
}
