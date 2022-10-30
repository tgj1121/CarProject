import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url = "Car";
  constructor(private http: HttpClient) { }
  
  public getCar() : Observable<Car[]>{

    return this.http.get<Car[]>(`${environment.apiUrl}/${this.url}`);
  }

  public createCar(car:Car) : Observable<Car[]>{

    return this.http.post<Car[]>(`${environment.apiUrl}/${this.url}`, car);
  }

  public updateCar(car:Car) : Observable<Car[]>{

    return this.http.put<Car[]>(`${environment.apiUrl}/${this.url}`, car);
  }

  public deleteCar(car:Car) : Observable<Car[]>{

    return this.http.delete<Car[]>(`${environment.apiUrl}/${this.url}/${car.id}`);
  }
}
