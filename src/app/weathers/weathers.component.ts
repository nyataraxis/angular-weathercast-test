import { Component, OnInit } from '@angular/core';
import { Weather } from '../Weather';
import { Result } from '../Result';
import { FormControl } from '@angular/forms';
import { WEATHERS } from '../mock-weathers';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})



export class WeathersComponent implements OnInit {

  weather: Weather = {
  	code: 1,
  	date: "29 Dec 2017",
  	day: "Fri",
  	high: 12,
  	low: -2,
  	text: "Partly Cloudy"
  };

  weatherArr: Weather[] = [];
  weathers=WEATHERS;

  selectedValue: string;
  
  cities = [
    {value: '2122265', viewValue: 'Moscow'},
    {value: '2459115', viewValue: 'New York'},
    {value: '1118370', viewValue: 'Tokyo'}
  ];
  startDate = new Date();

  
  
  
  constructor(private weathService: WeatherService) { }
  
  
  ngOnInit() {
    this.weathService.getForecasts().subscribe(val=>{
    	console.log(val.query.results.channel);
    	val.query.results.channel.map((elem,index)=>this.weatherArr.push(elem.item.forecast));
    });
    console.log(this.weatherArr);
  }

}
