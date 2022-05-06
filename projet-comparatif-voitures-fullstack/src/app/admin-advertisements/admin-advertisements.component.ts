import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-admin-advertisements',
  templateUrl: './admin-advertisements.component.html',
  styleUrls: ['./admin-advertisements.component.css']
})
export class AdminAdvertisementsComponent implements OnInit {
  startingdate = new Date();
  endingdate = new Date();
  city = new String();
  filteredCarList:any;

  constructor(private reservationData:SharedDataService, private carsService:CarsService) { }

  ngOnInit(): void {
    this.getAdvertisements();
  }

  deleteAdvertisement(car:Car){
    this.carsService.deleteAdvertisement(car._id).subscribe(
      ()=>{
        let index = this.filteredCarList.indexOf(car);
        this.filteredCarList.splice(index,1);
      },
      (error: any)=>{
        console.log("Delete error");
      }
    )
  }

  getAdvertisements(){
    this.carsService.getAdvertisements().subscribe(
      (cars:Array<Car>)=>{
        this.filteredCarList = cars;
      },
      (error)=>{
        console.log("Error", error);
      }
    );
  }
}
