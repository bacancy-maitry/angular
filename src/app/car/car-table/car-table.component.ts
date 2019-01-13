import { Component, OnInit } from '@angular/core';
import { CarInterface } from 'src/app/car-interface';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  carArray: CarInterface[];

  constructor(private carService: CarService) { }

  getCarData(): void{
    this.carService.getCarData().subscribe(car => this.carArray = car);
  }

  ngOnInit() {
    
  }
}
