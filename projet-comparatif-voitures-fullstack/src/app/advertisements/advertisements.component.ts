import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { SharedDataService } from '../shared-data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
  startingdate = new Date();
  endingdate = new Date();
  city = new String();
  //adtab:any;
  cars:any;

  constructor(private reservationData:SharedDataService, private carservice:CarsService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.reservationData.startingdateObs.subscribe( date => this.startingdate = date );
    this.reservationData.endingdateObs.subscribe( date => this.endingdate = date );
    this.reservationData.cityObs.subscribe( city => this.city = city );
    let startdate = this.datepipe.transform(this.endingdate,'yyyy-MM-dd');
    let enddate = this.datepipe.transform(this.endingdate,'yyyy-MM-dd');

    this.carservice.getValidCars(this.city, startdate, enddate).subscribe(
      (cars:Array<Car>)=>{
        this.cars=cars;
      },
      (error)=>{
        console.log("Error", error);
      }
    );
  }

}
