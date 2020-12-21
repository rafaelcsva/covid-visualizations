import {Component, OnInit} from '@angular/core';
import { ChartType } from 'angular-google-charts';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = [
    ['Germany', new Date().getDate()],
    ['United States', new Date().getDate()],
    ['Brazil', new Date().getDate()],
    ['Canada', new Date().getDate()],
    ['France', new Date().getDate()],
    ['Russia', new Date().getDate()],
    ['Afghanistan', new Date().getDate()],
    ['Antigua and Barbuda', new Date().getDate()],
    ['Armenia', new Date().getSeconds()]
  ];
  columns = ['Country', 'Popularity'];
  Geochart = ChartType.GeoChart;
  title = 'app';
  isLinear = true;
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
