import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {
  brand:any = "";
  numberOfSeats:any = "";
  mileage:any = "";
  numberOfDoors:any = "";
  pricePerDay:any = "";
  transmission:any = "";
  color:any = "";
  rating:any = "";
  electric:any = "";
  quantity:any = "";
  city:any = "";
  category:any = "";
  colors: string[] = ['Red', 'Blue', 'Gray', 'Yellow', 'Gray', 'Black'];
  cities: string[] = ['Ile-de-France', 'Grenoble', 'Lille', 'Nice'];
  categories: string[] = ['Small', 'Medium', 'Large', 'Estate', 'Premium', 'SUV'];

  constructor() { }

  ngOnInit(): void {
  }

}
