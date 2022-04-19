import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cities: Array<any> = [
    {value: 'Ile-de-france', viewValue: 'Ile de france'},
    {value: 'Grenoble', viewValue: 'Grenoble'},
    {value: 'Lille', viewValue: 'Lille'},
  ];
  minDate: Date;
  maxDate: Date;

  constructor() {
    // Set the minimum to the current day and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
}
