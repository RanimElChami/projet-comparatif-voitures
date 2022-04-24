import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any = "";
  password:any = "";
  hide = true;
  constructor(public authenticationService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {}

  submit(): void {
    console.log("login");
  }

}
