import { Component, OnInit } from '@angular/core';
import { stateData } from './data/states.data';
import { StateService } from './data/state.service';
import { WeatherService } from './data/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  city:string = "select-one";
  states: stateData[];
  today:any = new Date();
  thisYear = this.today.getFullYear();

  //Location weather data
  currentLocation:string;
  minTemp:number;
  maxTemp:number;
  avgTemp:number;
  pressure:number;
  humidity:number;
  forecastData:any[];

  // show weather info div
  showInfo:boolean = false;

  //show forecast info div
  showForecast:boolean =false;

  constructor(private stateService:StateService, private weatherService:WeatherService){}

  ngOnInit(){
    this.states = this.stateService.getStatesData()
  }

  getWeather(value){
    if(value == "select-one")
     {
       console.log("pls select something") 
     }
     else
     {
      console.log(value);
      this.weatherService.getWeatherInfo(value)
      .subscribe(res => { 
        console.log(res);
        let main = res.main;
        this.humidity = main.humidity;
        this.pressure = main.pressure
        this.maxTemp = main.temp_max;
        this.minTemp = main.temp_min;
        this.avgTemp = main.temp;
        this.currentLocation = res.name
      });
      this.showInfo = true;
      this.weatherService.getForecast(value)
      .subscribe(res => {
        this.forecastData = res.list;
        // console.log(res);
        console.log(this.forecastData[2]);
        //this.forecastData[2].temp.min
      })
      
    // console.log(value);
     }
  }

  showBtn(){
    this.showForecast = true;
  }
}
