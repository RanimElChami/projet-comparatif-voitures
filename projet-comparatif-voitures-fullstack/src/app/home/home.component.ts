import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SharedDataService  } from "../shared-data.service";
import { Router } from "@angular/router";
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cities:any;
  minDate: Date;
  maxDate: Date;
  city = new String;
  endingdate = new FormControl(new Date());
  startingdate = new FormControl(new Date());

  constructor(private reservationData:SharedDataService, private router:Router, private carservice:CarsService) {
    // Set the minimum to the current day and December 31st a year of next year
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  ngOnInit():void {
    this.carservice.getCities().subscribe(
      (city:Array<String>)=>{
        this.cities = city;
      },
      (error)=>{
        console.log("Error getting cities");
      }
    );
  }

  getdata(){
    this.reservationData.changeCity(this.city);
    this.reservationData.changeStartingDate(this.startingdate.value);
    this.reservationData.changeEndingDate(this.endingdate.value);
    this.router.navigate(["/advertisements"]);
  }
}
