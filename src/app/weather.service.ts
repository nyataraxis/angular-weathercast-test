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
  res: Result;
  queryData: Observable<Result>;
  querl='';

  getForecasts(cityId:string): Observable<Result> {
  	let querl='https://query.yahooapis.com/v1/public/yql?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20=%20'+cityId+'&format=json';

    this.queryData = this.http.get<Result>(querl).pipe(
    	tap(forecasts => console.log(`fetched forecasts`)));
    this.querl = querl;
    return this.queryData;
  }
 

}
