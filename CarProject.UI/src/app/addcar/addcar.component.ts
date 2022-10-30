import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarlistComponent } from '../carlist/carlist.component';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.scss']
})
export class AddcarComponent implements OnInit {
  @Input() car?: Car;
  @Output() carsNewList = new EventEmitter<Car[]>();


  constructor(private carService: CarService) {}  

  ngOnInit(): void {
  }

  createCar(car:Car) {
    this.carService
    .createCar(car)
    .subscribe((car: Car[]) => this.carsNewList.emit(car));
    this.car = undefined;
  }

  updateCar(car:Car) {
    this.carService
    .updateCar(car)
    .subscribe((car: Car[]) => this.carsNewList.emit(car));
    this.car = undefined;
  }

  onClose() {
    this.carService.getCar()
    .subscribe((car: Car[]) => this.carsNewList.emit(car));
    this.car = undefined;
  }
      
  }
