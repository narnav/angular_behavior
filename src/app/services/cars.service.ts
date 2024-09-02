import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Car } from '../models/Car';

@Injectable({
    providedIn: 'root'
})
export class CarsService {
    private SERVER = "http://localhost:3000/cars";
    constructor(private http: HttpClient) { }
     
    private carsSubject = new BehaviorSubject<Car[]>([]); // BehaviorSubject to hold and emit car data
    cars$ = this.carsSubject.asObservable(); // Observable to expose to components

    // Get all cars
    getCars(): Observable<Car[]> {
        return this.http.get<Car[]>(this.SERVER).pipe(tap(cars => this.carsSubject.next(cars))) // Update the BehaviorSubject when data is fetched
    }
    
    // Add a new car
    addCar(car: Car): Observable<Car> {
        return this.http.post<Car>(this.SERVER, car)
    }
    // Update an existing car
    updateCar(car: Car,id:string): Observable<any> {
        return this.http.put(this.SERVER +"/"+id, car)
    }

    // Delete a car by ID
    deleteCar(id: string): Observable<unknown> {
        return this.http.delete(`${this.SERVER}/${id}`)
    }

}
