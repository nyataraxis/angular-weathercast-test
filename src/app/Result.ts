import { Weather } from './Weather';

export class Result {
	query: {
		count: number;
		created: string;
		lang: string;
		results:{
			channel:[
              {
              	item: {
              		forecast: Weather;
              	}
              }
			]
		}
	}
}