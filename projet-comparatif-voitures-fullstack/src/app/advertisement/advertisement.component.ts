import { Component, Input, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  id:any;
  //@Input() car:Car;
  @Input() filteredCar:Car;
  
  constructor(private route:ActivatedRoute, private router: Router, public carsService:CarsService) { }

  ngOnInit(): void {
    console.log(this.filteredCar);
  }
}
