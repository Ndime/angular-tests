import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  changeWeight: boolean = false;
  constructor() { }

  consoleclick(){
    this.changeWeight = !this.changeWeight;
    console.log('clicked');
  }
}
