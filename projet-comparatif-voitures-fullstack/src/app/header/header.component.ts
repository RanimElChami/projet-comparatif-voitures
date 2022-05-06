import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService:AuthenticationService) {}
  
  ngOnInit() {
  }

  logout(): void {
    this.authenticationService.logout().subscribe(
      ()=>{
        window.location.reload();
      }
    )
  }
}
