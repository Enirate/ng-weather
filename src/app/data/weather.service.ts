import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import'rxjs/Rx' //operator/map'

@Injectable()
export class WeatherService {
  baseUrl:string = 'http://api.openweathermap.org/data/2.5/';
  apiKey:string = 'd3df4fe732bc2fa23481b8dcbd1d64e2'

  constructor(private _http:Http) { }

  getWeatherInfo(id){
    return this._http.get(`${this.baseUrl}weather?id=${id}&APPID=${this.apiKey}`)
    .retry(7)
    .map(res => res.json())
  }

  getForecast(id){
    return this._http.get(`${this.baseUrl}forecast/daily?id=${id}&APPID=${this.apiKey}`)
    .retry(7)
    .map(res => res.json());
  }

}
