import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from '../models/car';
import { CarsService } from '../cars.service';

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
  price:any = "";
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
  cars:any;

  constructor(private router: Router, public carsService:CarsService) { }

  ngOnInit(): void {
  }
  
  addAdvertisement():void{
    var car:Car = new Car();
    car.brand = this.brand;
    car.numberOfSeats = this.numberOfSeats;
    car.mileage = this.mileage;
    car.numberOfDoors = this.numberOfDoors;
    car.price = this.price;
    car.transmission = this.transmission;
    car.color = this.color;
    car.rating = this.rating;
    car.electric = this.electric;
    car.quantity = this.quantity;
    car.city = this.city;
    car.category = this.category;

    this.brand = "";
    this.numberOfSeats = "";
    this.mileage = "";
    this.numberOfDoors = "";
    this.price = "";
    this.transmission = "";
    this.color = "";
    this.rating = "";
    this.electric = "";
    this.quantity = "";
    this.city = "";
    this.category = "";
    
    this.carsService.addAdvertisement(car).subscribe(
      (car:any)=>{
        this.cars.push(car);
      },
      (error: any)=>{
        console.log("error post in cars", error);
      }
    )
  }

}
