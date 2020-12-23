import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GoogleChartsModule} from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepLabel, MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import { GeochartDayCovidCountryComponent } from './geochart-day-covid-country/geochart-day-covid-country.component';
import { GeochartCovidStatesBrazilComponent } from './geochart-covid-states-brazil/geochart-covid-states-brazil.component';
import { LinechartCasesMillionComponent } from './linechart-cases-million/linechart-cases-million.component';
import { LinechartContinentsComponent } from './linechart-continents/linechart-continents.component';

@NgModule({
  declarations: [
    AppComponent,
    GeochartDayCovidCountryComponent,
    GeochartCovidStatesBrazilComponent,
    LinechartCasesMillionComponent,
    LinechartContinentsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GoogleChartsModule,
        BrowserAnimationsModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
