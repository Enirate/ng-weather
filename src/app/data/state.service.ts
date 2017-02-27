import { Injectable } from '@angular/core';
import { StateData } from './states.data'; 
/* To follow seperation of concerns this service supplies the app the list of states in our array with their respective Id 
and country code */

@Injectable()
export class StateService {

  constructor() { }

  getStatesData(){
    return StateData; //when this method is called it returns the array.
  }

}
