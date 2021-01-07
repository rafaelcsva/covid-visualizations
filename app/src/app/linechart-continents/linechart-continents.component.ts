import { Component, OnInit } from '@angular/core';
import {ChartType} from 'angular-google-charts';
import * as data from '../../assets/data/taxesbycontinent.json';

@Component({
  selector: 'app-linechart-continents',
  templateUrl: './linechart-continents.component.html',
  styleUrls: ['./linechart-continents.component.css']
})
export class LinechartContinentsComponent implements OnInit {
  columns: any = [];
  Linechart = ChartType.BubbleChart;
  title = 'app';
  data: any = [];
  erro = false;
  options = {
    width: 800,
    height: 500,
    title: `Statistics deaths per million on each country along the days`,
    hAxis: {title: 'Mean'},
    vAxis: {title: 'Standard Deviation'},
    bubble: {textStyle: {fontSize: 11}},
  };
  maxIdh = 1000;
  minIdh = 900;
  serie: any;
  seriea: any;
  totalCountries = 0;

  constructor() { }

  ngOnInit(): void {
    this.serie = (data as any).default;
    this.seriea = (data as any).default;

    this.filter(this.minIdh, this.maxIdh);
  }

  filter(minIdh: number, maxIdh: number): void{
    // const tmp = (data as any).default;
    const tmp = {countries: [], evolution: {}};
    // tmp.evolution = this.serie.evolution;
    tmp.countries =
      this.serie.countries.filter((obj: any[]) => obj[1] >= minIdh && obj[1] <= maxIdh);

    if (tmp.countries.length === 0){
      this.erro = true;
      return;
    }
    this.erro = false;
    this.data = [];
    // @ts-ignore
    // tmp.countries = tmp.countries.map((obj: any[]) => obj[0]);
    this.totalCountries = tmp.countries.length;

    this.columns = ['ID', 'Mean Daily Infected', 'Standard Deviation Daily Infected', 'HDI'];
      // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < tmp.countries.length ; i++){
      const c = tmp.countries[i][0];
      const hdi = tmp.countries[i][1];
      // console.log(c);
      this.data.push([c, this.serie.evolution[c][0],
        Math.sqrt(this.serie.evolution[c][1]), hdi]);
    }
    // console.log(this.serie);
  }
}
