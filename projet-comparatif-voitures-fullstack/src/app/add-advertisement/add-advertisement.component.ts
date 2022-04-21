import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {
  carBrand:any = "";
  numberOfSeats:any = "";
  releaseDate:any = "";
  mileage:any = "";
  numberOfDoors:any = "";
  pricePerDay:any = "";
  transmission:any = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
