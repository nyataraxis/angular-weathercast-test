import { Component, OnInit} from '@angular/core';
import { Weather } from '../Weather';
import { Result } from '../Result';
import { FormControl } from '@angular/forms';
import {MatTableDataSource} from '@angular/material';


import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})



export class WeathersComponent implements OnInit {

  weatherArr: Weather[] = [];


  selectedValue: string;

  cities = [
    {value: '2122265', viewValue: 'Moscow'},
    {value: '2459115', viewValue: 'New York'},
    {value: '2345889', viewValue: 'Tokyo'},
    {value: '2487889', viewValue: 'Colorado'}
  ];

  startDate = new Date();

  lastReq: string;

  displayedColumns = ['date', 'day', 'high', 'low', 'text'];

  weatherSource = new MatTableDataSource();

  constructor(private weathService: WeatherService) { }

  changeForecast() {

    this.weatherArr = [];

    this.weathService.getForecasts(this.selectedValue).subscribe(val =>
      this.weatherSource.data = val.query.results.channel.map((elem, index) => (elem.item.forecast)));

    console.log(this.weatherArr);
    this.lastReq = this.weathService.querl;


  }

  ngOnInit(){

  }

}
