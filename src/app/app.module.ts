import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';

import { MatFormFieldModule, MatButtonToggleModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule, MatSliderModule} from '@angular/material';

import { DataService } from './data.service';
import { ConsoleLoggerService } from './console-logger.service';
import { BookingService } from './booking.service';

import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSliderModule,
    RouterModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ DataService, { provide: LoggerService, useClass: ConsoleLoggerService }, MessageService, BookingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
