import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) {}
  ngOnInit() {
  }
  /**getProtectedData() {
    this.user.getProtectedData().subscribe((data: any) => console.log(data));
  }
  logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.getProtectedData();
  }**/

}
