import { Component, OnInit } from '@angular/core';
import { stateData } from './data/states.data'; //import stateData interface to be used as variable type
import { StateService } from './data/state.service'; //import state service to supply states and id
import { WeatherService } from './data/weather.service'; //weather service that fetch needed info from the WeatherService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //declaration of class variables and respective types.
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

 //dependency injection
  constructor(private stateService:StateService, private weatherService:WeatherService){}

  ngOnInit(){
    this.states = this.stateService.getStatesData() //supply states to component when component is initialized.
  }

  getWeather(value){ //component method to call WeatherService methods 
    if(value == "select-one") //if no state is selected no service will be called
     {
       console.log("pls select something") 
     }
     else //if state is selected do the following:
     {
      console.log(value);
      this.weatherService.getWeatherInfo(value) //call getWeatherInfo of WeatherService passing state id as value.
      .subscribe(res => { 
        console.log(res);
        let main = res.main; //store response in method variable
        this.humidity = main.humidity; //initialize class variables with corresponding response data
        this.pressure = main.pressure
        this.maxTemp = main.temp_max;
        this.minTemp = main.temp_min;
        this.avgTemp = main.temp;
        this.currentLocation = res.name
      });
      this.showInfo = true; //show div that displays weather data
      this.weatherService.getForecast(value) //call service method to get forecast for the particular state
      .subscribe(res => {
        this.forecastData = res.list;
        // console.log(this.forecastData[2]);
      })
      
     }
  }

  showBtn(){
    this.showForecast = true; //button that shows the div which displays 7 days forecast.
  }
}
