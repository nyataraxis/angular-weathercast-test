import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Weather } from '../Weather';
import { Result } from '../Result';
import { FormControl } from '@angular/forms';
import { WEATHERS } from '../mock-weathers';
import {MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import {merge} from 'rxjs/observable/merge';
import {HttpClient} from '@angular/common/http';


import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})



export class WeathersComponent implements AfterViewInit {

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
  private subscription: Subscription = new Subscription();
  cities = [
    {value: '2122265', viewValue: 'Moscow'},
    {value: '2459115', viewValue: 'New York'},
    {value: '2345889', viewValue: 'Tokyo'},
    {value: '2487889', viewValue: 'Colorado'}
  ];
  startDate = new Date();
  lastReq: string;
  displayedColumns = ['date', 'day', 'high', 'low', 'text'];
  /*weatherSource: MyDataSource | null;*/
  weatherSource = new MatTableDataSource();
  exampleDatabase: ExampleHttpDao | null;
  constructor(private http:HttpClient,private weathService: WeatherService) { }
  
  changeForecast() {
  	this.weatherArr = [];
  	/*this.weathService.getForecasts(this.selectedValue).subscribe(val =>
  		val.query.results.channel.map((elem,index)=>this.weatherArr.push(elem.item.forecast)));*/
  	this.weathService.getForecasts(this.selectedValue).subscribe(val =>
  		this.weatherSource.data = val.query.results.channel.map((elem,index)=>(elem.item.forecast)));
  	console.log(this.weatherArr);
  	this.lastReq = this.weathService.querl;
    
    
  }
  

  ngAfterViewInit() {
  	this.exampleDatabase = new ExampleHttpDao(this.http);
  	merge().pipe(null,)

  }

}

export interface Res {
  query: QuerRes;
}

export interface QuerRes {
	count: number;
	created: string;
	lang: string;
	results: ChannelInterface;
}

export interface ChannelInterface{
		channel: WeatherInterface[];
}

export interface WeatherInterface{
	item: ForecastInterface;
}

export interface ForecastInterface{
	date: string;
	day: string;
	high: number;
	low: number;
	text:string;
}


export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(cityId:string): Observable<Res> {
    const href = 'https://query.yahooapis.com/v1/public/yql';
    const requestUrl =
        `${href}?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20=%20${cityId}&format=json`;

    return this.http.get<Res>(requestUrl);
  }
}