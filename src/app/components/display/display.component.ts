import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/Car';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
    myCars: Car[] = [];

    constructor(private cs: CarsService) { }
    ngOnInit(): void {
        this.cs.cars$.subscribe(cars => this.myCars = cars);
    }

    // Other methods like addnewCar, delCar, etc., can be implemented here
}