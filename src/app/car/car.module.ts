import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarFormComponent } from './car-form/car-form.component';
import { CarTableComponent } from './car-table/car-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CarFormComponent, CarTableComponent],
  exports: [CarFormComponent, CarTableComponent]
})
export class CarModule { }
