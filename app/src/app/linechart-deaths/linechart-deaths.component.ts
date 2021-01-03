import { Component, OnInit } from '@angular/core';
import {ChartType} from 'angular-google-charts';
import * as data from '../../assets/data/worddeaths.json';

@Component({
  selector: 'app-linechart-deaths',
  templateUrl: './linechart-deaths.component.html',
  styleUrls: ['./linechart-deaths.component.css']
})
export class LinechartDeathsComponent implements OnInit {
  columns: any = [];
  Linechart = ChartType.LineChart;
  title = 'app';
  data: any = [];
  options = {
    width: 800,
    height: 500,
    title: 'Number of world deaths per day',
  };
  maxIdh = 1000;
  minIdh = 900;
  serie: any;
  seriea: any;

  constructor() { }

  ngOnInit(): void {
    this.serie = (data as any).default;
    this.seriea = (data as any).default;
    // @ts-ignore
    this.columns = ['Day', 'World'];
    this.data = this.serie.map((obj: any, idx: any) => [idx, obj]);
  }
}
