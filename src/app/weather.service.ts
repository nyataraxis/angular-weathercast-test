import { Injectable } from '@angular/core';
import { Result } from './Result';
import { Weather } from './Weather';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap} from 'rxjs/operators';


@Injectable()
export class WeatherService {
  constructor(private http:HttpClient) { 
    this.getForecasts().subscribe
  }
   
  res: Result;
  queryData: Observable<Result>;
  private querl='https://query.yahooapis.com/v1/public/yql?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20=%202487889&format=json';

  getForecasts(): Observable<Result> {
    this.queryData = this.http.get<Result>(this.querl).pipe(
    	tap(forecasts => console.log(`fetched forecasts`)));
    return this.queryData;
  }
 

}
