import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'; //import Http service from angular's core library. 

import'rxjs/Rx' //import all rxjs operators.

@Injectable()
export class WeatherService {
  baseUrl:string = 'http://api.openweathermap.org/data/2.5/'; //the main Api url.
  apiKey:string = 'd3df4fe732bc2fa23481b8dcbd1d64e2' //my api key to allow access to the service.

  //depency injection. _http variable is an instance of Http service.
  constructor(private _http:Http) { }

  getWeatherInfo(id){ //method to get weather infomation of a particular state using it's id.
    return this._http.get(`${this.baseUrl}weather?id=${id}&APPID=${this.apiKey}`) //implementation of http get method
    .retry(7) //rxjs operator to retry up to 7 times if connection fails
    .map(res => res.json()) //parse response as a JSON object.
  }

  getForecast(id){
    return this._http.get(`${this.baseUrl}forecast/daily?id=${id}&APPID=${this.apiKey}`)
    .retry(7)
    .map(res => res.json());
  }

}
