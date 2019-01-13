import { Injectable } from '@angular/core';
import { CarInterface } from './car-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carArray:Array<CarInterface> = [] ; 

  constructor() { }

  setCarData(carInstance): void{
    this.carArray.push(carInstance);
  }

  getCarData(): Observable<CarInterface[]>{
    return of(this.carArray);
  }

}
