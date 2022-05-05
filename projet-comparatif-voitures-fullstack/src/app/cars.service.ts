import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient, private router: Router) { }
  addAdvertisement(car:Car):Observable<any>{
    return this.http.post("http://localhost:3000/cars", car);
  }

  getAdvertisements():Observable<any>{
    return this.http.get("http://localhost:3000/cars", {withCredentials: true});
  }

  getCities():Observable<any>{
    return this.http.get("http://localhost:3000/avalaibleCities");
  }

  getAdvertisement(carId:any):Observable<any>{
    return this.http.get("http://localhost:3000/cars/"+carId);
  }

  updateAdvertisement(car:Car):Observable<any>{
    return this.http.put("http://localhost:3000/cars/"+car._id, car);
  }

  deleteAdvertisement(carId:any):Observable<any>{
    return this.http.delete("http://localhost:3000/cars/"+carId);
  }

  getValidCars(city:String,startdate:String,enddate:String):Observable<any>{
    return this.http.get('http://localhost:3000/avalaiblecars/'+city+'/'+startdate+'/'+enddate);
  }
}
