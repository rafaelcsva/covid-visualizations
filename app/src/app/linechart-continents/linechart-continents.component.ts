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
  Linechart = ChartType.LineChart;
  title = 'app';
  data: any = [];
  options = {
    width: 800,
    height: 500,
    title: 'Number of daily infected per million on each country along the firsts 80 days',
  };
  maxIdh = 1000;
  minIdh = 900;
  serie: any;
  seriea: any;

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
    tmp.countries = this.serie.countries.filter((obj: any[]) => obj[1] >= minIdh && obj[1] <= maxIdh);

    if (tmp.countries.length === 0){
      return;
    }
    this.data = [];
    // @ts-ignore
    tmp.countries = tmp.countries.map((obj: any[]) => obj[0]);
    this.columns = ['Day', ...tmp.countries];
    // console.log(this.columns);
    let day = 0;
    // console.log()

    while (true && day < 80){
      const tdat = [day];
      let ok = false;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0 ; i < tmp.countries.length ; i++){
        const c = tmp.countries[i];
        // console.log(c);
        if (this.serie.evolution[c].length <= day){
          tdat.push(0);
          continue;
        }
        ok = true;
        if (this.serie.evolution[c][day] < 0){
          this.serie.evolution[c][day] *= -1;
        }

        tdat.push(this.serie.evolution[c][day]);
      }
      if (!ok) {
        break;
      }
      this.data.push([...tdat]);
      day++;
    }
    // console.log(this.serie);
  }
}
