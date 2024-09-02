import { Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars.service';
import { Car } from './models/Car';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    myCars:Car[]=[]
    newCar: Car = { make: 'ggg', model: '', year: 0 };
    constructor(private myCarService: CarsService) {
        this.getAllCars()
    }
    ngOnInit() {
        this.getAllCars()
    }

    getAllCars(){
        this.myCarService.getCars().subscribe(cars => this.myCars=cars)
    }

    addnewCar(){
        this.myCarService.addCar(this.newCar).subscribe(cars => this.getAllCars())
    }

    delCar(id:string){
        this.myCarService.deleteCar(id).subscribe(cars => this.getAllCars())
    }

    updCar(id:string){
        this.myCarService.updateCar(this.newCar,id).subscribe(cars => this.getAllCars())
    }
}
