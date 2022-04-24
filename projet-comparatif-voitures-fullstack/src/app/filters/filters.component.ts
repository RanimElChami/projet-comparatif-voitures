import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
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
  colors = new FormControl();
  colorsList: string[] = ['Red', 'Blue', 'Gray', 'Yellow', 'Gray', 'Black'];
  cities: string[] = ['Ile-de-France', 'Grenoble', 'Lille', 'Nice'];
  categories: string[] = ['Small', 'Medium', 'Large', 'Estate', 'Premium', 'SUV'];

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
