import { Component, OnInit } from '@angular/core';
import { CarInterface } from 'src/app/car-interface';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carInstance:CarInterface;

  carObj={
    carType:null,
    carBrand:null,
  }

  constructor(private carService: CarService) { }

  addCarData(): void{
    this.carInstance = {
      carType: this.carObj.carType,
      carBrand: this.carObj.carBrand,
    }
    console.log(this.carInstance);
    console.log(this.carService.setCarData);
    this.carService.setCarData(this.carInstance);
  }

  ngOnInit() {
  }

}
