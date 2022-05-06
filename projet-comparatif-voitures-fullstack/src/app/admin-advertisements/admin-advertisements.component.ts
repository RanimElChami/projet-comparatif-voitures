import { DatePipe } from '@angular/common';
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
  cars:any;

  constructor(private reservationData:SharedDataService, private carsService:CarsService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.reservationData.startingdateObs.subscribe( date => this.startingdate = date );
    this.reservationData.endingdateObs.subscribe( date => this.endingdate = date );
    this.reservationData.cityObs.subscribe( city => this.city = city );
    let startdate = this.datepipe.transform(this.endingdate,'yyyy-MM-dd');
    let enddate = this.datepipe.transform(this.endingdate,'yyyy-MM-dd');
    this.getAdvertisements();
  }

  deleteAdvertisement(car:Car){
    this.carsService.deleteAdvertisement(car._id).subscribe(
      ()=>{
        let index = this.cars.indexOf(car);
        this.cars.splice(index,1);
      },
      (error: any)=>{
        console.log("Delete error");
      }
    )
  }
  getAdvertisements(){
    this.carsService.getAdvertisements().subscribe(
      (cars:Array<Car>)=>{
        this.cars=cars;
      },
      (error)=>{
        console.log("Error", error);
      }
    );
  }
}
