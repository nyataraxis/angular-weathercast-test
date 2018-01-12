import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
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

  weatherArr: WeatherTable[] = [];
  


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
        this.weathService.getForecasts(this.selectedValue).subscribe(val =>
          this.weatherArr = val.query.results.channel.map((elem, index) => 
          {
            let res = new WeatherTable();
            res.code = elem.item.forecast.code;
            res.date = elem.item.forecast.date;
            res.day = elem.item.forecast.day;
            res.high = elem.item.forecast.high;
            res.low = elem.item.forecast.low;
            res.text = elem.item.forecast.text;

            if (index > 0) {

              res.diffHigh = elem.item.forecast.high - val.query.results.channel[index - 1].item.forecast.high;
              res.diffLow = elem.item.forecast.low - val.query.results.channel[index - 1].item.forecast.low;

            } else {
              res.diffHigh = 0;
              res.diffLow = 0;
            }
            return res;
            }));  
  	console.log(this.weatherArr);
  	this.lastReq = this.weathService.querl;
    
    
  }



  ngOnInit(){

  }
  
}

@Pipe({ name: 'gridCellData' })
export class GridCellDataPipe implements PipeTransform {
  transform(gridData: any) {
    return gridData.data[gridData.column.caption.toLowerCase()];
  }
}

class WeatherTable extends Weather {
  constructor() {
    super();
  }
  diffHigh: number;
  diffLow: number;
}
