import { Injectable } from '@angular/core';
import { Result } from './Result';
import { Weather } from './Weather';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { catchError, map, tap} from 'rxjs/operators';


@Injectable()
export class WeatherService {
  constructor(private http:HttpClient) { 
    
  }
  get data(): Weather[]{
  	return this.dataChange.value
  };
   dataChange: BehaviorSubject<Weather[]> = new BehaviorSubject<Weather[]>([]);
  res: Result;
  queryData: Observable<Result>;
  queryWeath: Observable<Weather[]>;
  querl='https://query.yahooapis.com/v1/public/yql?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20=%2487889&format=json';
  
  getWeathers(cityId:string){
  	let querl='https://query.yahooapis.com/v1/public/yql?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20=%20'+cityId+'&format=json';

    this.queryData = this.http.get<Result>(querl).pipe(
    	tap(forecasts => console.log(`fetched forecasts`)));
    this.querl = querl;
    this.queryData.subscribe({next:val=>val.query.results.channel.map((el,ind)=>el.item.forecast)});
    this.dataChange.next(this.data);
  }
  getForecasts(cityId:string): Observable<Result> {
  	let querl='https://query.yahooapis.com/v1/public/yql?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20=%20'+cityId+'&format=json';

    this.queryData = this.http.get<Result>(querl).pipe(
    	tap(forecasts => console.log(`fetched forecasts`)));
    this.querl = querl;
    this.dataChange.next(this.data);
    return this.queryData;
  }
 

}
