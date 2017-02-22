import { Injectable } from '@angular/core';
import { StateData } from './states.data';

@Injectable()
export class StateService {

  constructor() { }

  getStatesData(){
    return StateData;
  }

}
