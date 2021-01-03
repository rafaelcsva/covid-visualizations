import { Component, OnInit } from '@angular/core';
import {ChartType} from 'angular-google-charts';
import * as data from '../../assets/data/deathsstatebrazil.json';

@Component({
  selector: 'app-geochart-covid-deaths-state-brazil',
  templateUrl: './geochart-covid-deaths-state-brazil.component.html',
  styleUrls: ['./geochart-covid-deaths-state-brazil.component.css']
})
export class GeochartCovidDeathsStateBrazilComponent implements OnInit {
  columns = ['Country', 'Number of Deaths per 100k habitants'];
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
    this.data = tmp.map((obj: any[], i: any) => [obj[0], obj[1]]);
  }

}
