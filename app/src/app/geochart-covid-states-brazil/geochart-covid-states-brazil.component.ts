import { Component, OnInit } from '@angular/core';
import {ChartType} from 'angular-google-charts';
import * as data from '../../assets/data/dayscovidbrazilstates.json';

@Component({
  selector: 'app-geochart-covid-states-brazil',
  templateUrl: './geochart-covid-states-brazil.component.html',
  styleUrls: ['./geochart-covid-states-brazil.component.css']
})
export class GeochartCovidStatesBrazilComponent implements OnInit {
  columns = ['Country', 'Days since first covid case'];
  Geochart = ChartType.GeoChart;
  title = 'app';
  data = [];
  options = {
    width: 800,
    height: 500,
    title: 'Brazil states covid spread',
    region: 'BR',
    displayMode: 'regions',
    resolution: 'provinces',
    colors: ['#f6c7b6', '#f3b49f', '#ec8f6e', '#ec8f6e', '#ec8f6e', '#ec8f6e', '#e6693e',
      '#e0440e',  '#e0440e',  '#e0440e',  '#e0440e',
      '#E20000', '#C61F1B']
  };

  constructor() { }

  ngOnInit(): void {
    const tmp = (data as any).default;
    this.data = tmp;
    this.data = tmp.map((obj: any[], i: any) => [obj[0],
      obj[1] +
      Math.floor((new Date().getTime() - new Date(obj[2]).getTime()) / (1000 * 3600 * 24))]);
  }

}
