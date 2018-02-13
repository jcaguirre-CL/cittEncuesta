import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { AppComponent } from './app.component';

const routes: Routes =[
    { path: 'app',      component: AppComponent },
    { path: 'component1',      component: Component1Component },
    { path: 'component2',      component: Component2Component },
    { path: '',          redirectTo: 'component1', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }


