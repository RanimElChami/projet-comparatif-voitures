import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  startdate = new BehaviorSubject<Date>(new Date());
  enddate = new BehaviorSubject<Date>(new Date());
  city = new BehaviorSubject<String>(new String());
  startingdateObs = this.startdate.asObservable();
  endingdateObs = this.enddate.asObservable();
  cityObs = this.city.asObservable();
  
  constructor() { }

  changeStartingDate(date:Date){
    this.startdate.next(date);
  }

  changeEndingDate(date:Date){
    this.enddate.next(date);
  }

  changeCity(city:String){
    this.city.next(city);
  }
}
