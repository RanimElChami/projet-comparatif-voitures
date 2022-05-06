import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Car } from '../models/car';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnChanges {
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
  
  avalaiblecars:Array<Car>;
  adtab:Array<Car>;
  filters:any;

  @Input() cars:Array<Car>;
  @Output() newItem = new EventEmitter<Array<Car>>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
	}

  ngOnInit() {
    this.adtab=this.cars;
    this.avalaiblecars=this.cars;
    var filterArray: any[] =[];

    this.adtab.forEach((element: any) => {
      Object.keys(element).forEach((property: any)=>{
        if(property!='_id'&&property!='__v'&&property!='quantity'&&property!='city'&&property!='brand'&&property!='mileage'){
          var existProperty = filterArray.find(prop => prop.name === property);
          if (!existProperty){
            var options:any = {
              name:property,
              value:[]
            }
            options.value.push([element[property],false]);
            filterArray.push(options);
          }
          else{
            var existOption = existProperty.value.find((option: any) => option[0] === element[property]);
            if(!existOption){
              var index = filterArray.findIndex(prop => prop.name === property);
              filterArray[index].value.push([element[property],false]);
            }
          }
        }
        });
      });
    this.filters = filterArray;
    }
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  dynamicFiltering(){
    var filtered: Array<Car> = []; 
    var cars = this.avalaiblecars;
    var reset = true;
    cars.forEach((car:any)=>{
      this.filters.forEach((property:any)=>{
        property.value.forEach((option:any)=>{
          if(option[1]==true){
            reset = false;
            if(car[property.name] === option[0]){
              filtered.push(car);
            }
          }
        });
        });
    });
    
    if(reset){
      this.adtab = cars;
      this.newItem.emit(cars);
    }
    else{
      filtered = [...new Set(filtered)];
      this.adtab= filtered;
      this.newItem.emit(filtered);
    }

  }
}