import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent {
  title = 'CarProject.UI';
  car: Car[] = [];
  carEdit?: Car;
  @Input() delCar?: Car;
  @Output() carsNewList = new EventEmitter<Car[]>();

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCar().subscribe((result: Car[]) => (this.car = result));
  }

  public onClickAddButton() {
    this.carEdit = new Car();
  }

  public onClickEditButton(car: Car) {
    this.carEdit = car;
  }

  updateCarList(car: Car[]) {
    this.car = car;
  }

  deleteCar(delCar:Car) {
    if(confirm("Are you sure to want to delete this record?")) {
      this.carService
    .deleteCar(delCar)
    .subscribe((delCar: Car[]) => this.carsNewList.emit(delCar)); 
    this.car = this.car.filter(item => item.id != delCar.id); 
    }     
  } 
}
