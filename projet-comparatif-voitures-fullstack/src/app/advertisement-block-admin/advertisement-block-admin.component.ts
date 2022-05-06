import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-advertisement-block-admin',
  templateUrl: './advertisement-block-admin.component.html',
  styleUrls: ['./advertisement-block-admin.component.css']
})
export class AdvertisementBlockAdminComponent implements OnInit {
  @Input() filteredCar:Car;
  @Output() deleteAdvertisement = new EventEmitter<Car>();
  advertisementStatus:string  = 'view';
  colors: string[] = ['Red', 'Blue', 'Gray', 'Yellow', 'Gray', 'Black'];
  cities: string[] = ['Paris', 'Nice', 'Grenoble', 'Marseille', 'Nantes', 'Lyon'];
  categories: string[] = ['Small', 'Medium', 'Large', 'Estate', 'Premium', 'SUV'];

  constructor(public carsService:CarsService) { }

  ngOnInit(): void {}
  
  deleteAdvertisementEvent(): void {
    this.deleteAdvertisement.emit(this.filteredCar);
  }
  updateAdvertisementEvent(): void {
    this.advertisementStatus = "loading";
    this.carsService.updateAdvertisement(this.filteredCar).subscribe(
      (car:Car)=>{
        this.advertisementStatus = "view";
      },
      (error)=>{
        this.advertisementStatus="error";
        console.log("Error updating advertisement");
      }
    );
  }

}
